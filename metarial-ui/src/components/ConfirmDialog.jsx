import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ConfirmDialog = ({ open, title, content, onConfirm, onCancel }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onCancel}
      PaperProps={{
        sx: {
          borderRadius: '12px',
          padding: '8px'
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: 700, color: 'slate.900' }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: 'slate.600' }}>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
        <Button 
          onClick={onCancel} 
          variant="outlined" 
          color="inherit"
          sx={{ borderColor: 'slate.200', color: 'slate.600', '&:hover': { backgroundColor: 'slate.50', borderColor: 'slate.300' } }}
        >
          Vazgeç
        </Button>
        <Button 
          onClick={onConfirm} 
          variant="contained" 
          color="error"
          autoFocus
        >
          Sil
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
