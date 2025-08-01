import { useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Folders from './pages/Folders';
import Footer from './components/Footer';
import { applyTheme, getInitialTheme } from './theme';

const App = () => {
  useEffect(() => {
    const theme = getInitialTheme();
    applyTheme(theme);
  }, []);

  return (
    <Box
      className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          flex: 1,
          maxWidth: '85rem',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<Folders />} />
          </Route>
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
};

export default App;
