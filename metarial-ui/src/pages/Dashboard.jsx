import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <CssBaseline />
      
      {/* Permanent sidebar on the left */}
      <Sidebar open={sidebarOpen} onToggleSidebar={handleToggleSidebar} />
      
      {/* Main content grid flow container */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2.5, md: 4 },
          width: { sm: `calc(100% - ${sidebarOpen ? 240 : 72}px)` },
          transition: (theme) =>
            theme.transitions.create(['width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            }),
          overflowX: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Transparent Header replacing old Navbar layout */}
        <Header 
          onToggleSidebar={handleToggleSidebar} 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        
        {/* Nested router outputs sharing the search state */}
        <Box sx={{ flexGrow: 1, mt: 1 }}>
          <Outlet context={{ searchTerm, setSearchTerm }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
