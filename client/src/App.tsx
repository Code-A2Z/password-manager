import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Folders from './pages/Folders';

const App = () => {
  // TODO: Use `isLoaded` - Handle loading state to avoid flickering and show a loading spinner or message
  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: '85rem',
          margin: '0 auto',
          padding: '1rem',
        }}
      >
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<Folders />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
};

export default App;
