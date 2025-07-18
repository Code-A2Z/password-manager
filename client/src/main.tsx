import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App.tsx';
import UserAuth from './pages/UserAuth.tsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ThemeProvider theme={theme}>
          <>
            {/* If user session is not created or deleted */}
            <SignedOut>
              <UserAuth />
            </SignedOut>

            {/* If user session is created */}
            <SignedIn>
              <App />
            </SignedIn>
          </>
        </ThemeProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
