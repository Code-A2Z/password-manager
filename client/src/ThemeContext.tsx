import { createContext, useState, useEffect, useContext } from 'react';
import { applyTheme, getInitialTheme } from './theme';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useAuth } from '@clerk/clerk-react';

import type { ReactNode } from 'react';
import type { Theme } from './theme';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const getMuiTheme = (mode: Theme) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#60a5fa' : '#1d4ed8',
      },
      background: {
        default: mode === 'dark' ? '#111827' : '#ffffff',
        paper: mode === 'dark' ? '#1f2937' : '#f9fafb',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#000000',
      },
    },
  });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (!isLoaded) return;

    const stored = getInitialTheme();

    if (isSignedIn) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      setTheme('light');
      applyTheme('light');
    }
  }, [isSignedIn, isLoaded]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    if (isSignedIn) {
      applyTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={getMuiTheme(theme)}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
