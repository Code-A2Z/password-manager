import React, { useState } from 'react';
import { Avatar, Box, Card, CardContent, Container, CssBaseline, Dialog, DialogTitle, DialogContent, IconButton, ThemeProvider, Typography, createTheme} from '@mui/material';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import Header from '../components/Header';

interface Account {
  id: number;
  name: string;
  description: string;
  platform: string;
  username: string;
  email: string;
  password: string;
}

const accounts: Account[] = [
  {
    id: 1,
    name: 'Account 1',
    description: 'Protected by 4-digit Pin',
    platform: 'Instagram',
    username: 'archa',
    email: 'archa@example.com',
    password: '********',
  },
  {
    id: 2,
    name: 'Account 2',
    description: 'Protected by 4-digit Pin',
    platform: 'Instagram',
    username: 'archa2',
    email: 'archa2@example.com',
    password: '********',
  },
];

const AccountPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleOpenDetails = (account: Account) => setSelectedAccount(account);
  const handleCloseDetails = () => setSelectedAccount(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        onBack={() => console.log('Back')}
        onAdd={() => console.log('Add')}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
        onSignOut={() => console.log('Sign Out')}
        darkMode={darkMode}
      />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Accounts
        </Typography>
        <Grid container spacing={2}>
          {accounts.map((account) => (
            <Grid key={account.id}>
              <Card
                variant="outlined"
                sx={{ borderRadius: 2, cursor: 'pointer' }}
                onClick={() => handleOpenDetails(account)}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: '#E1306C' }}>
                    <InstagramIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {account.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {account.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={!!selectedAccount}
        onClose={handleCloseDetails}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography fontWeight="bold">{selectedAccount?.platform}</Typography>
          <IconButton onClick={handleCloseDetails}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {['Username', 'Email', 'Password'].map((label) => (
            <Box
              key={label}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1,
                borderBottom: '1px solid #eee',
              }}
            >
              <Typography fontWeight="medium">{label}</Typography>
              <IconButton size="small">
                <EditIcon />
              </IconButton>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default AccountPage;
