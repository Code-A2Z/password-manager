import { Box, Typography, Link, Stack } from "@mui/material";
import { Lock } from "lucide-react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        borderTop: '1px solid #e0e0e0',
        padding: {
          xs: '1.5rem',
          sm: '2rem 3rem',
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 2, sm: 0 }}
      >
        <Typography
          variant="body1"
          sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Lock />{' '}
          Password Manager
        </Typography>

        <Stack direction="row" spacing={3}>
          <Link href="https://github.com/Code-A2Z/password-manager" underline="hover" color="text.primary">
            Repository
          </Link>
          <Link href="https://discord.gg/tSqtvHUJzE" underline="hover" color="text.primary">
            Discord
          </Link>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Code A2Z.
          <br />
          All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
