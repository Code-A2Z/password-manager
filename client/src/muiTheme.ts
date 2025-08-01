import { createTheme } from '@mui/material/styles';
import { getInitialTheme } from './theme';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1d4ed8',
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
    },
    text: {
      primary: '#000000',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60a5fa',
    },
    background: {
      default: '#111827', 
      paper: '#1f2937',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export const getMuiTheme = () => {
  const theme = getInitialTheme();
  return theme === 'dark' ? darkTheme : lightTheme;
};
