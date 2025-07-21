import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Folders from './pages/Folders';
import Footer from './components/Footer';

const App = () => {
  // TODO: Use `isLoaded` - Handle loading state to avoid flickering and show a loading spinner or message
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
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
