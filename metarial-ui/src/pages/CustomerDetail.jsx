import React, { useEffect } from 'react';
import { useParams, useNavigate, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import NoteIcon from '@mui/icons-material/Note';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Chip from '@mui/material/Chip';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RoomIcon from '@mui/icons-material/Room';

import { fetchCustomers } from '../store/customerSlice';

// Subcomponents for nested views
const GeneralInfo = ({ customer }) => (
  <Card sx={{ p: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
        Genel Bilgiler
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <BusinessIcon color="action" />
            <Box>
              <Typography variant="caption" color="text.secondary">Şirket</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>{customer.company}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <EmailIcon color="action" />
            <Box>
              <Typography variant="caption" color="text.secondary">E-posta</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>{customer.email}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <PhoneIcon color="action" />
            <Box>
              <Typography variant="caption" color="text.secondary">Telefon</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>{customer.phone || 'Girilmemiş'}</Typography>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <CalendarTodayIcon color="action" />
            <Box>
              <Typography variant="caption" color="text.secondary">Kayıt Tarihi</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>{customer.registrationDate}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: 'slate.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ℹ️
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">Müşteri Rolü</Typography>
              <Box sx={{ mt: 0.5 }}>
                <Chip label={customer.role} color="primary" size="small" sx={{ fontWeight: 600 }} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: 'slate.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              🛡️
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">Durum</Typography>
              <Box sx={{ mt: 0.5 }}>
                <Chip 
                  label={customer.status} 
                  color={customer.status === 'Aktif' ? 'success' : customer.status === 'Pasif' ? 'error' : 'warning'} 
                  size="small" 
                  sx={{ fontWeight: 600 }} 
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12}>
          <Divider sx={{ my: 2 }} />
        </Grid>
        
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
            <RoomIcon color="action" sx={{ mt: 0.5 }} />
            <Box>
              <Typography variant="caption" color="text.secondary">Adres</Typography>
              <Typography variant="body1">{customer.address || 'Adres bilgisi bulunmuyor.'}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const ActivityHistory = () => {
  const activities = [
    { id: 1, type: 'Telefon Görüşmesi', date: '2026-06-28 14:30', desc: 'Müşteri ile fiyat teklifi hakkında görüşüldü. Olumlu bakıyor.' },
    { id: 2, type: 'E-posta Gönderimi', date: '2026-06-25 10:15', desc: 'Yeni ürün kataloğu ve güncel fiyat listesi mail olarak gönderildi.' },
    { id: 3, type: 'Toplantı', date: '2026-06-20 11:00', desc: 'Ofisimizde yüz yüze tanışma ve iş birliği detayları konuşuldu.' }
  ];

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          Aktivite Geçmişi
        </Typography>
        <List>
          {activities.map((act, index) => (
            <React.Fragment key={act.id}>
              <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 40, mt: 1 }}>
                  <HistoryIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 0.5 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {act.type}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {act.date}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Typography variant="body2" color="text.primary">
                      {act.desc}
                    </Typography>
                  }
                />
              </ListItem>
              {index < activities.length - 1 && <Divider component="li" sx={{ my: 1 }} />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const CustomerNotes = ({ customer }) => (
  <Card sx={{ p: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
        Özel Notlar
      </Typography>
      <Box sx={{ p: 2, backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #4f46e5' }}>
        <Typography variant="body2" sx={{ whiteSpace: 'pre-line', fontStyle: 'italic', color: 'slate.700' }}>
          {customer.notes || 'Bu müşteri hakkında henüz özel bir not eklenmemiş.'}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const CustomerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const customers = useSelector((state) => state.customers.items);
  const customer = customers.find((c) => c.id === parseInt(id));

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(fetchCustomers());
    }
  }, [dispatch, customers]);

  if (!customer) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          Müşteri bulunamadı!
        </Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/dashboard')} sx={{ mt: 2 }}>
          Listeye Geri Dön
        </Button>
      </Box>
    );
  }

  // Get current active tab based on route path
  const getActiveTab = () => {
    if (location.pathname.endsWith('/activities')) return 1;
    if (location.pathname.endsWith('/notes')) return 2;
    return 0; // Default or /general
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Header Panel */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button 
          variant="outlined" 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate('/dashboard')}
          sx={{ borderColor: 'slate.200', color: 'slate.600', '&:hover': { backgroundColor: 'slate.50', borderColor: 'slate.300' } }}
        >
          Geri Dön
        </Button>
        <Box>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 800, color: 'slate.900', letterSpacing: '-0.75px' }}>
            {customer.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {customer.company} &bull; Müşteri Detay Kartı
          </Typography>
        </Box>
      </Box>

      {/* Tabs Menu */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={getActiveTab()} aria-label="customer detail tabs">
          <Tab 
            label="Genel Bilgiler" 
            icon={<AccountBoxIcon />} 
            iconPosition="start"
            component={Link} 
            to={`/dashboard/customer/${id}/general`} 
            sx={{ fontWeight: 600, minHeight: 48 }}
          />
          <Tab 
            label="Aktivite Geçmişi" 
            icon={<HistoryIcon />} 
            iconPosition="start"
            component={Link} 
            to={`/dashboard/customer/${id}/activities`}
            sx={{ fontWeight: 600, minHeight: 48 }}
          />
          <Tab 
            label="Özel Notlar" 
            icon={<NoteIcon />} 
            iconPosition="start"
            component={Link} 
            to={`/dashboard/customer/${id}/notes`}
            sx={{ fontWeight: 600, minHeight: 48 }}
          />
        </Tabs>
      </Box>

      {/* Nested Switch Routes */}
      <Routes>
        <Route path="general" element={<GeneralInfo customer={customer} />} />
        <Route path="activities" element={<ActivityHistory />} />
        <Route path="notes" element={<CustomerNotes customer={customer} />} />
        {/* Redirect default /customer/:id path to /customer/:id/general */}
        <Route path="*" element={<Navigate to="general" replace />} />
      </Routes>
    </Box>
  );
};

export default CustomerDetail;
