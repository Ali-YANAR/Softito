import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const drawerWidth = 240;

const Sidebar = ({ open, onToggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const generalMenuItems = [
    { text: 'Müşteri Listesi', icon: <PeopleIcon />, path: '/dashboard', active: true }
  ];

  const systemMenuItems = [
    { text: 'Ayarlar', icon: <SettingsIcon />, path: '#settings', active: false },
    { text: 'Geri Bildirim', icon: <FeedbackIcon />, path: '#feedback', active: false }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : 72,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: open ? drawerWidth : 72,
          boxSizing: 'border-box',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            }),
          borderRight: '1px solid #e2e8f0',
          backgroundColor: '#ffffff',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }
      }}
    >
      <Box>
        {/* Top: Branding Logo & Name */}
        <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1.5, minHeight: 64 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #0f2c59 0%, #97d03b 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.1rem',
              flexShrink: 0
            }}
          >
            A
          </Box>
          <Box sx={{ opacity: open ? 1 : 0, transition: 'opacity 0.2s', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'slate.900', lineHeight: 1.2 }}>
              Antigravity
            </Typography>
            <Typography variant="caption" sx={{ color: '#97d03b', fontWeight: 700, fontSize: '0.7rem' }}>
              CRM PORTAL
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mx: 2, borderColor: '#f1f5f9' }} />

        {/* Group 1: Genel Menu */}
        <Box sx={{ px: 1.5, py: 1.5 }}>
          {open && (
            <Typography variant="caption" sx={{ px: 1.5, fontWeight: 700, color: 'slate.400', textTransform: 'uppercase', fontSize: '0.65rem' }}>
              Genel
            </Typography>
          )}
          <List sx={{ p: 0, mt: 0.5 }}>
            {generalMenuItems.map((item) => {
              const isActive = item.active && (location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path)));
              return (
                <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => item.active && navigate(item.path)}
                    disabled={!item.active}
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2,
                      borderRadius: '8px',
                      backgroundColor: isActive ? '#0f2c59' : 'transparent',
                      color: isActive ? '#ffffff' : 'slate.700',
                      borderLeft: isActive ? '4px solid #97d03b' : 'none',
                      opacity: item.active ? 1 : 0.6,
                      '&:hover': {
                        backgroundColor: isActive ? '#081a36' : '#f8fafc',
                        color: isActive ? '#ffffff' : '#0f2c59',
                        '& .MuiListItemIcon-root': {
                          color: isActive ? '#97d03b' : '#0f2c59'
                        }
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : 'auto',
                        justifyContent: 'center',
                        color: isActive ? '#97d03b' : 'slate.500',
                        transition: 'color 0.2s'
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        transition: 'opacity 0.2s',
                        '& .MuiTypography-root': {
                          fontWeight: isActive ? 600 : 500,
                          fontSize: '0.85rem'
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Group 2: Sistem Menu */}
        <Box sx={{ px: 1.5, py: 0.5 }}>
          {open && (
            <Typography variant="caption" sx={{ px: 1.5, fontWeight: 700, color: 'slate.400', textTransform: 'uppercase', fontSize: '0.65rem' }}>
              Sistem
            </Typography>
          )}
          <List sx={{ p: 0, mt: 0.5 }}>
            {systemMenuItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 0.5 }}>
                <ListItemButton
                  disabled
                  sx={{
                    minHeight: 40,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2,
                    borderRadius: '8px',
                    color: 'slate.400',
                    opacity: 0.5
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : 'auto',
                      justifyContent: 'center',
                      color: 'slate.400'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      '& .MuiTypography-root': {
                        fontWeight: 500,
                        fontSize: '0.85rem'
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Bottom: Profile Account Card & Toggle Button */}
      <Box sx={{ p: 1.5 }}>
        <Divider sx={{ mb: 1.5, borderColor: '#f1f5f9' }} />
        
        {/* User Card */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: open ? 'space-between' : 'center',
            p: open ? 1 : 0,
            borderRadius: '10px',
            backgroundColor: open ? '#f8fafc' : 'transparent',
            border: open ? '1px solid #e2e8f0' : 'none'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar 
              sx={{ 
                bgcolor: 'primary.main', 
                width: 32, 
                height: 32, 
                fontSize: '0.8rem', 
                fontWeight: 600 
              }}
            >
              AD
            </Avatar>
            {open && (
              <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: 120 }}>
                <Typography variant="body2" sx={{ fontWeight: 700, color: 'slate.900', fontSize: '0.8rem', lineHeight: 1.2 }}>
                  Admin Account
                </Typography>
                <Typography variant="caption" sx={{ color: 'slate.500', fontSize: '0.7rem' }}>
                  admin@crm.com
                </Typography>
              </Box>
            )}
          </Box>
          
          {open && (
            <Tooltip title="Çıkış Yap">
              <IconButton 
                size="small" 
                onClick={handleLogout}
                sx={{ 
                  color: 'error.main', 
                  '&:hover': { backgroundColor: 'error.light', color: 'error.contrastText' } 
                }}
              >
                <LogoutIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {/* Sidebar Toggle Collapse Button */}
        <Box sx={{ mt: 1.5, display: 'flex', justifyContent: 'center' }}>
          <ListItemButton
            onClick={onToggleSidebar}
            sx={{
              minHeight: 36,
              justifyContent: 'center',
              borderRadius: '8px',
              color: 'slate.500',
              backgroundColor: '#f1f5f9',
              '&:hover': { backgroundColor: '#e2e8f0' }
            }}
          >
            <Typography variant="button" sx={{ fontWeight: 700, fontSize: '0.75rem', display: open ? 'block' : 'none' }}>
              Menüyü Daralt
            </Typography>
            <Box sx={{ display: open ? 'none' : 'block', fontSize: '0.75rem', fontWeight: 800 }}>
              ⟫
            </Box>
          </ListItemButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
