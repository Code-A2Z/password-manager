import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';

import { ThemeProvider, useThemeContext } from './ThemeContext';
import App from './App.tsx';
import UserAuth from './pages/UserAuth.tsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk publishable key');
}

const Root = () => {
  const { theme } = useThemeContext();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{ baseTheme: theme === 'dark' ? dark : undefined }}
    >
      <ThemeProvider>
        <SignedOut>
          <UserAuth />
        </SignedOut>
        <SignedIn>
          <App />
        </SignedIn>
      </ThemeProvider>
    </ClerkProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
