import { Box } from '@mui/material';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';

function App() {
  // TODO: Use `isLoaded` - Handle loading state to avoid flickering and show a loading spinner or message
  return (
    <>
      {/* If user session is not created or deleted */}
      <SignedOut>
        <SignIn />
      </SignedOut>

      {/* If user session is created */}
      <SignedIn>
        <Box>
          <Navbar />
        </Box>
      </SignedIn>
    </>
  );
};

export default App;
