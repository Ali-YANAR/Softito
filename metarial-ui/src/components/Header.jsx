import React, { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const Header = ({ onToggleSidebar, searchTerm, onSearchChange }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Mock Notification Data in state
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Yeni müşteri kaydı yapıldı', desc: 'Ali YANAR sisteme eklendi.', time: '10 dk önce', unread: true },
    { id: 2, title: 'Ayşe Kaya güncellendi', desc: 'Müşteri profili güncellendi.', time: '1 saat önce', unread: true },
    { id: 3, title: 'Sistem Raporu Hazır', desc: 'Haziran ayı analitiği hazırlandı.', time: '5 saat önce', unread: true }
  ]);

  // Notifications Popover State
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);

  const handleNotifClick = (event) => {
    setNotifAnchorEl(event.currentTarget);
    // Mark notifications as read when clicked/opened
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };

  const isNotifOpen = Boolean(notifAnchorEl);
  const notifId = isNotifOpen ? 'notifications-popover' : undefined;

  const unreadCount = notifications.filter((n) => n.unread).length;
  const isDetailPage = pathnames.includes('customer');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: { xs: 'stretch', md: 'center' },
        justifyContent: 'space-between',
        gap: 2,
        width: '100%',
        pb: 2,
        borderBottom: '1px solid #e2e8f0',
        mb: 3
      }}
    >
      {/* Left: Breadcrumbs & Title */}
      <Stack spacing={0.5}>
        <Breadcrumbs 
          separator={<NavigateNextRoundedIcon fontSize="small" sx={{ color: 'slate.400' }} />}
          aria-label="breadcrumb"
        >
          <Link 
            component={RouterLink} 
            to="/dashboard" 
            underline="hover" 
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontWeight: 500 }}
          >
            Müşteriler
          </Link>
          {isDetailPage ? (
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontWeight: 500, color: 'text.primary' }}>
              Detay Kartı
            </Typography>
          ) : (
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontWeight: 500, color: 'text.primary' }}>
              Liste
            </Typography>
          )}
        </Breadcrumbs>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 800, color: 'slate.900', letterSpacing: '-0.5px' }}>
          {isDetailPage ? 'Müşteri Detay' : 'Müşteri Yönetim Paneli'}
        </Typography>
      </Stack>

      {/* Right: Search & Actions */}
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ justifyContent: 'space-between' }}>
        {/* Toggle Menu Button for Mobile */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onToggleSidebar}
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          <MenuRoundedIcon />
        </IconButton>

        {/* Global Search Bar (hidden in detail page for cleaner look) */}
        {!isDetailPage && (
          <TextField
            size="small"
            placeholder="İsim, e-posta veya şirket ara..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              )
            }}
            sx={{
              width: { xs: '100%', sm: '280px' },
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#ffffff'
              }
            }}
          />
        )}

        {/* Actions Button List */}
        <Stack direction="row" spacing={1}>
          <IconButton 
            size="small"
            onClick={handleNotifClick}
            sx={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e2e8f0', 
              borderRadius: '8px',
              p: 1,
              color: 'slate.600',
              '&:hover': { backgroundColor: '#f8fafc' }
            }}
          >
            <Badge badgeContent={unreadCount} color="primary">
              <NotificationsRoundedIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Stack>
      </Stack>

      {/* 🔔 Notifications Popover Dropdown */}
      <Popover
        id={notifId}
        open={isNotifOpen}
        anchorEl={notifAnchorEl}
        onClose={handleNotifClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            width: 320,
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
            border: '1px solid #f1f5f9',
            mt: 1,
          }
        }}
      >
        <Box sx={{ p: 2, pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Bildirimler</Typography>
          <Chip 
            label={unreadCount > 0 ? `${unreadCount} Yeni` : 'Tümü Okundu'} 
            color={unreadCount > 0 ? 'primary' : 'default'}
            size="small" 
            sx={{ fontWeight: 700, height: 20, fontSize: '0.7rem' }} 
          />
        </Box>
        <Divider />
        <List sx={{ p: 0 }}>
          {notifications.map((notif, index) => (
            <React.Fragment key={notif.id}>
              <ListItem 
                alignItems="flex-start" 
                sx={{ 
                  px: 2, 
                  py: 1.5, 
                  backgroundColor: notif.unread ? 'rgba(79, 70, 229, 0.03)' : 'transparent',
                  '&:hover': { backgroundColor: '#f8fafc' }
                }}
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'slate.900', pr: 1, fontSize: '0.85rem' }}>
                        {notif.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'slate.400', whiteSpace: 'nowrap' }}>
                        {notif.time}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Typography variant="caption" sx={{ color: 'slate.500', display: 'block', mt: 0.5 }}>
                      {notif.desc}
                    </Typography>
                  }
                />
              </ListItem>
              {index < notifications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Popover>
    </Box>
  );
};

export default Header;
