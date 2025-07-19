import { Box, Typography } from '@mui/material';
import { UserButton } from '@clerk/clerk-react';
import { Folder, Lock, Moon } from 'lucide-react';

const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        borderBottom: '1px solid #e0e0e0',
        padding: {
          xs: '1.5rem',
          sm: '2rem 3rem',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '85rem',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Lock />{' '}
          Password Manager
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Folder />
          <Moon />
          <UserButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
