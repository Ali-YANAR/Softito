import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const roles = ['Müşteri', 'Aday', 'Partner'];
const statuses = ['Aktif', 'Pasif', 'Beklemede'];

const CustomerDialog = ({ open, customer, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: 'Müşteri',
    status: 'Aktif',
    registrationDate: dayjs().format('YYYY-MM-DD'),
    address: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (customer) {
      setFormData({
        ...customer,
        registrationDate: customer.registrationDate || dayjs().format('YYYY-MM-DD')
      });
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: 'Müşteri',
        status: 'Aktif',
        registrationDate: dayjs().format('YYYY-MM-DD'),
        address: '',
        notes: ''
      });
    }
    setErrors({});
  }, [customer, open]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Ad Soyad gereklidir.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta adresi gereklidir.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçersiz e-posta adresi.';
    }
    if (!formData.company.trim()) newErrors.company = 'Şirket adı gereklidir.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSave(formData);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '12px'
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: 700, borderBottom: '1px solid #f1f5f9', pb: 2 }}>
        {customer ? 'Müşteriyi Güncelle' : 'Yeni Müşteri Ekle'}
      </DialogTitle>
      
      <DialogContent sx={{ mt: 2 }}>
        <Grid container spacing={2.5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Ad Soyad"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="E-posta"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Telefon"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+90 (5xx) xxx xx xx"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Şirket"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              error={!!errors.company}
              helperText={errors.company}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={roles}
              value={formData.role}
              onChange={(event, newValue) => handleChange('role', newValue || 'Müşteri')}
              renderInput={(params) => <TextField {...params} label="Rol" required fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={statuses}
              value={formData.status}
              onChange={(event, newValue) => handleChange('status', newValue || 'Aktif')}
              renderInput={(params) => <TextField {...params} label="Durum" required fullWidth />}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="Kayıt Tarihi"
              value={dayjs(formData.registrationDate)}
              onChange={(newDate) => handleChange('registrationDate', newDate ? newDate.format('YYYY-MM-DD') : '')}
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Adres"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Özel Notlar"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ px: 3, py: 2.5, borderTop: '1px solid #f1f5f9', gap: 1 }}>
        <Button 
          onClick={onClose} 
          variant="outlined" 
          color="inherit"
          sx={{ borderColor: 'slate.200', color: 'slate.600', '&:hover': { backgroundColor: 'slate.50', borderColor: 'slate.300' } }}
        >
          Vazgeç
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          color="primary"
          sx={{ fontWeight: 600 }}
        >
          {customer ? 'Kaydet' : 'Ekle'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerDialog;
