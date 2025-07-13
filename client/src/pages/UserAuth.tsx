import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Box, Typography } from '@mui/material'
import SignIn from '../components/SignIn'

function UserAuth() {
  return (
    <>
      <SignedOut>
        <SignIn />
      </SignedOut>

      <SignedIn>
        <Box p={3}>
          <Box display="flex" justifyContent="flex-end">
            <UserButton />
          </Box>
          <Typography variant="h5">
            You’re logged in. Redirecting...
          </Typography>
        </Box>
      </SignedIn>
    </>
  )
}

export default UserAuth
