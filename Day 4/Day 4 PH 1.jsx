import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

function LoginButton() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Implement your login logic here, e.g., API call
    if (username === 'validUser' && password === 'correctPassword') {
      // Successful login
      handleClose();
    } else {
      // Invalid login, show an error message or handle accordingly
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" data-testid="login" onClick={handleOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            data-testid="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary" data-testid="dia-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginButton;