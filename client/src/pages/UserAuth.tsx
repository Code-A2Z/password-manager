import { Button, Box, Typography, Paper } from '@mui/material';
import { SignInButton } from '@clerk/clerk-react';

const UserAuth = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f5f5f5"
      overflow="hidden"
      px={2}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          Hey there!
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
        >
          Welcome to Password Manager. Click the button below to get started.
        </Typography>
        <Box mt={3}>
          <SignInButton mode="modal">
            <Button
              variant="outlined"
              fullWidth
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                textTransform: 'none',
                fontWeight: 500,
                backgroundColor: '#fff',
                borderColor: '#ddd',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  borderColor: '#ccc',
                },
              }}
            >
              <Box
                component="img"
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                sx={{ width: 20, height: 20 }}
              />
              <Typography fontSize="0.9rem" fontWeight={500}>
                Sign in with Google
              </Typography>
            </Button>
          </SignInButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserAuth;
