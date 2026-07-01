import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { fetchCustomers, addCustomer, updateCustomer, deleteCustomer } from '../store/customerSlice';
import CustomerDialog from '../components/CustomerDialog';
import ConfirmDialog from '../components/ConfirmDialog';

// Reusable StatCard mirroring the MUI Dashboard template
const StatCard = ({ title, value, percentage, isPositive, sparklinePath, strokeColor, accentColor }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        p: 2.5, 
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        borderLeft: `5px solid ${accentColor}`,
        boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.03)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: `0 8px 24px -4px ${accentColor}30`
        }
      }}
    >
      <Box>
        <Typography variant="caption" sx={{ color: 'slate.500', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {title}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, color: 'slate.900', letterSpacing: '-1.5px' }}>
          {value}
        </Typography>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {isPositive ? (
            <TrendingUpIcon sx={{ color: 'success.main', fontSize: 16 }} />
          ) : (
            <TrendingDownIcon sx={{ color: 'error.main', fontSize: 16 }} />
          )}
          <Typography variant="caption" sx={{ color: isPositive ? 'success.main' : 'error.main', fontWeight: 700 }}>
            {percentage}
          </Typography>
          <Typography variant="caption" sx={{ color: 'slate.400', ml: 0.5 }}>
            geçen aydan
          </Typography>
        </Box>
        {/* SVG Sparkline */}
        <Box sx={{ width: 85, height: 30 }}>
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path
              d={sparklinePath}
              fill="none"
              stroke={strokeColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </Card>
  );
};

const CustomerList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Read search term directly from the parent Dashboard outlet context
  const { searchTerm } = useOutletContext();

  const { items: customers, status, error } = useSelector((state) => state.customers);

  const [statusFilter, setStatusFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  // Dialog / Confirmation state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleRoleFilterChange = (e) => {
    setRoleFilter(e.target.value);
  };

  const handleOpenAddDialog = () => {
    setSelectedCustomer(null);
    setDialogOpen(true);
  };

  const handleOpenEditDialog = (customer) => {
    setSelectedCustomer(customer);
    setDialogOpen(true);
  };

  const handleOpenConfirmDialog = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const handleSaveCustomer = (customerData) => {
    if (selectedCustomer) {
      dispatch(updateCustomer(customerData));
    } else {
      const maxId = customers.reduce((max, c) => (c.id > max ? c.id : max), 0);
      dispatch(addCustomer({ ...customerData, id: maxId + 1 }));
    }
    setDialogOpen(false);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteCustomer(deleteId));
    setConfirmOpen(false);
  };

  const getStatusChipColor = (status) => {
    switch (status) {
      case 'Aktif':
        return 'success';
      case 'Pasif':
        return 'error';
      case 'Beklemede':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getRoleChipColor = (role) => {
    switch (role) {
      case 'Müşteri':
        return 'info';
      case 'Partner':
        return 'primary';
      case 'Aday':
        return 'secondary';
      default:
        return 'default';
    }
  };

  // Derive counts dynamically for the Stat Cards
  const totalCount = customers.length;
  const activeCount = customers.filter(c => c.status === 'Aktif').length;
  const pendingCount = customers.filter(c => c.status === 'Beklemede' || c.status === 'Pasif').length;

  const filteredCustomers = customers.filter((customer) => {
    const name = customer.name || '';
    const email = customer.email || '';
    const company = customer.company || '';
    
    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === '' || customer.status === statusFilter;
    const matchesRole = roleFilter === '' || customer.role === roleFilter;

    return matchesSearch && matchesStatus && matchesRole;
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
      
      {/* 📊 Stat Cards Grid */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <StatCard
            title="Toplam Müşteri"
            value={totalCount}
            percentage="+12.5%"
            isPositive={true}
            sparklinePath="M0 30 Q 20 10, 40 25 T 80 5 T 100 15"
            strokeColor="#0f2c59"
            accentColor="#0f2c59"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard
            title="Aktif Müşteriler"
            value={activeCount}
            percentage="+8.2%"
            isPositive={true}
            sparklinePath="M0 25 Q 15 35, 30 15 T 60 5 T 100 10"
            strokeColor="#97d03b"
            accentColor="#97d03b"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard
            title="Bekleyen / Pasif"
            value={pendingCount}
            percentage="-1.4%"
            isPositive={false}
            sparklinePath="M0 10 Q 25 15, 50 35 T 80 20 T 100 30"
            strokeColor="#0f2c59"
            accentColor="#97d03b"
          />
        </Grid>
      </Grid>

      {/* Filter and Add Button Actions Bar */}
      <Card sx={{ p: 2.5, border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', borderRadius: '12px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <FormControl size="small" sx={{ minWidth: '150px' }}>
              <InputLabel id="status-filter-label">Durum</InputLabel>
              <Select
                labelId="status-filter-label"
                id="status-filter"
                value={statusFilter}
                label="Durum"
                onChange={handleStatusFilterChange}
                sx={{ borderRadius: '8px' }}
              >
                <MenuItem value="">Tümü</MenuItem>
                <MenuItem value="Aktif">Aktif</MenuItem>
                <MenuItem value="Pasif">Pasif</MenuItem>
                <MenuItem value="Beklemede">Beklemede</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: '150px' }}>
              <InputLabel id="role-filter-label">Rol</InputLabel>
              <Select
                labelId="role-filter-label"
                id="role-filter"
                value={roleFilter}
                label="Rol"
                onChange={handleRoleFilterChange}
                sx={{ borderRadius: '8px' }}
              >
                <MenuItem value="">Tümü</MenuItem>
                <MenuItem value="Müşteri">Müşteri</MenuItem>
                <MenuItem value="Aday">Aday</MenuItem>
                <MenuItem value="Partner">Partner</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenAddDialog}
            sx={{
              py: 1,
              px: 2.5,
              fontWeight: 600,
              borderRadius: '8px',
              background: 'linear-gradient(45deg, #0f2c59 30%, #97d03b 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #081a36 30%, #6c9b22 90%)',
              }
            }}
          >
            Yeni Müşteri Ekle
          </Button>
        </Box>
      </Card>

      {/* Error View */}
      {status === 'failed' && (
        <Alert severity="error" sx={{ borderRadius: '8px' }}>
          Veriler yüklenirken bir hata oluştu: {error}
        </Alert>
      )}

      {/* Table List Container */}
      {status === 'loading' && customers.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <TableContainer 
          component={Paper} 
          sx={{ 
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', 
            borderRadius: '12px',
            border: '1px solid #e2e8f0' 
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="customer table">
            <TableHead sx={{ backgroundColor: '#f8fafc' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: 'slate.700', fontSize: '0.85rem' }}>Ad Soyad</TableCell>
                <TableCell sx={{ fontWeight: 700, color: 'slate.700', fontSize: '0.85rem' }}>Şirket</TableCell>
                <TableCell sx={{ fontWeight: 700, color: 'slate.700', fontSize: '0.85rem' }}>Rol</TableCell>
                <TableCell sx={{ fontWeight: 700, color: 'slate.700', fontSize: '0.85rem' }}>Durum</TableCell>
                <TableCell sx={{ fontWeight: 700, color: 'slate.700', fontSize: '0.85rem' }}>Kayıt Tarihi</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, color: 'slate.700', pr: 3, fontSize: '0.85rem' }}>İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCustomers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 8, color: 'text.secondary' }}>
                    Aramanızla eşleşen hiçbir kayıt bulunamadı.
                  </TableCell>
                </TableRow>
              ) : (
                filteredCustomers.map((customer, index) => {
                  const isOdd = index % 2 !== 0;
                  return (
                    <TableRow
                      key={customer.id}
                      sx={{
                        backgroundColor: isOdd ? 'rgba(15, 44, 89, 0.025)' : 'rgba(151, 208, 59, 0.015)',
                        transition: 'background-color 0.15s',
                        '& td, & th': {
                          borderColor: 'rgba(15, 44, 89, 0.05)'
                        },
                        '&:hover': { 
                          backgroundColor: 'rgba(151, 208, 59, 0.08)' 
                        },
                        '&:last-child td, &:last-child th': { border: 0 }
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'slate.900' }}>
                            {customer.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {customer.email}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="body2" sx={{ fontWeight: 550, color: 'slate.800' }}>
                            {customer.company}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {customer.phone || 'Telefon Yok'}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={customer.role}
                          color={getRoleChipColor(customer.role)}
                          size="small"
                          sx={{ fontWeight: 700, fontSize: '0.7rem', borderRadius: '6px' }}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={customer.status}
                          color={getStatusChipColor(customer.status)}
                          size="small"
                          sx={{ fontWeight: 700, fontSize: '0.7rem', borderRadius: '6px' }}
                        />
                      </TableCell>
                      <TableCell sx={{ color: 'text.secondary', fontSize: '0.8rem', fontWeight: 500 }}>
                        {customer.registrationDate}
                      </TableCell>
                      <TableCell align="right" sx={{ pr: 2 }}>
                        <IconButton
                          size="small"
                          onClick={() => navigate(`customer/${customer.id}`)}
                          color="inherit"
                          sx={{ color: 'slate.500', '&:hover': { color: 'primary.main', backgroundColor: '#f1f5f9' } }}
                          title="Detaylar"
                        >
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleOpenEditDialog(customer)}
                          color="inherit"
                          sx={{ color: 'slate.500', '&:hover': { color: 'warning.main', backgroundColor: '#f1f5f9' } }}
                          title="Düzenle"
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleOpenConfirmDialog(customer.id)}
                          color="inherit"
                          sx={{ color: 'slate.500', '&:hover': { color: 'error.main', backgroundColor: '#f1f5f9' } }}
                          title="Sil"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Dialog for adding/updating customer */}
      <CustomerDialog
        open={dialogOpen}
        customer={selectedCustomer}
        onSave={handleSaveCustomer}
        onClose={() => setDialogOpen(false)}
      />

      {/* Deletion verification dialogue */}
      <ConfirmDialog
        open={confirmOpen}
        title="Müşteriyi Sil"
        content="Bu müşteriyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz."
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmOpen(false)}
      />
    </Box>
  );
};

export default CustomerList;
