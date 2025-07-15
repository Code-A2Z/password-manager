import { Box } from '@mui/material';
import Navbar from './components/Navbar';

const App = () => {
  // TODO: Use `isLoaded` - Handle loading state to avoid flickering and show a loading spinner or message
  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default App;
