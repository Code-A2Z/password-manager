import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';

interface HeaderProps {
  onBack: () => void;
  onAdd: () => void;
  onToggleTheme: () => void;
  onSignOut: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onBack,
  onAdd,
  onToggleTheme,
  onSignOut,
  darkMode,
}) => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: '1px solid #e0e0e0' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton onClick={onBack} edge="start" color="inherit" aria-label="back">
          <ArrowBackIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={onAdd} color="inherit">
            <AddIcon />
          </IconButton>
          <IconButton onClick={onToggleTheme} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton onClick={onSignOut} color="inherit">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
