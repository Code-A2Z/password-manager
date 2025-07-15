import { Box, Typography } from '@mui/material';
import { UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h6">Password Manager</Typography>
      <UserButton />
    </Box>
  );
};

export default Navbar;
