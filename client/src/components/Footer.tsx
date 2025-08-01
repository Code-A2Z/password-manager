import { Box, Typography, Link, Stack } from "@mui/material";
import { Lock } from "lucide-react";

const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-white dark:bg-gray-900 text-black dark:text-white border-t border-gray-200 dark:border-gray-700"
      sx={{
        mt: 'auto',
        padding: {
          xs: '1.5rem',
          sm: '2rem 3rem',
        },
      }}
    >
      <Stack
        maxWidth="85rem"
        margin="0 auto"
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 2, sm: 0 }}
      >
        <Typography
          variant="body1"
          className="flex items-center gap-2"
        >
          <Lock />{' '}
          Password Manager
        </Typography>

        <Stack direction="row" spacing={3}>
          <Link 
            href="https://github.com/Code-A2Z/password-manager" 
            underline="hover" 
            className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Repository
          </Link>
          <Link 
            href="https://discord.gg/tSqtvHUJzE" 
            underline="hover" 
            className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Discord
          </Link>
        </Stack>

        <Typography 
          variant="body2" 
          className="text-gray-600 dark:text-gray-400 text-center sm:text-right"
        >
          © {new Date().getFullYear()} Code A2Z.
          <br />
          All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
