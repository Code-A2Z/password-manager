import { Box, Typography, IconButton } from '@mui/material';
import { UserButton } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import { Folder, Lock, Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <Box
      component="nav"
      className="bg-white dark:bg-gray-900 text-black dark:text-white"
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
          <Lock /> Password Manager
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Folder />
          <IconButton onClick={toggleTheme} sx={{ color: 'text.primary' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <UserButton
            key={theme}
            appearance={{
              baseTheme: theme === 'dark' ? dark : undefined,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
