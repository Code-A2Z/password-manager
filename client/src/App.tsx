import { useEffect } from 'react';
import { Box } from '@mui/material';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import {
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import UserAuth from './pages/UserAuth';
import Folders from './pages/Folders';
import Accounts from './pages/Accounts';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { registerUser } from './requests/user';

const App = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  useEffect(() => {
    if (isSignedIn && user) {
      registerUser(
        user.id,
        user.firstName || '',
        user.lastName || '',
        user.primaryEmailAddress?.emailAddress || '',
        user.imageUrl || ''
      ).then((res) => {
        sessionStorage.setItem('access_token', res.access_token);
      }).catch((error) => {
        console.error('Error registering user:', error);
      });
    }
  }, [user]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SignedOut>
        <UserAuth />
      </SignedOut>

      <SignedIn>
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
              <Route path='/:folderId' element={<Accounts />} />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </SignedIn>
    </>
  );
};

export default App;
