import { Box, Typography } from "@mui/material";
import { FolderIcon } from "lucide-react";

const Folder = ({
  name,
  desc,
}: {
  name: string;
  desc: string;
}) => {
  return (
    <Box
      sx={(theme) => ({
        width: '16rem',
        height: '8rem',
        borderRadius: '1rem',
        padding: '1.25rem',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        border: `1px solid ${
          theme.palette.mode === 'light'
            ? '#e0e0e0'
            : theme.palette.divider
        }`,
        boxShadow: 
          theme.palette.mode === 'light'
            ? '0 2px 6px rgba(0, 0, 0, 0.04)'
            : '0 2px 6px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        display: 'flex',
        gap: '1rem',
        '&:hover': {
          boxShadow: 
            theme.palette.mode === 'light'
              ? '0 4px 12px rgba(0, 0, 0, 0.08)'
              : '0 4px 12px rgba(0, 0, 0, 0.4)',
          transform: 'translateY(-2px)',
        },
      })}
    >
      {/* Icon on the left */}
      <Box mt="4px">
        <FolderIcon size={32} strokeWidth={1.5} />
      </Box>

      {/* Text on the right */}
      <Box display="flex" flexDirection="column" justifyContent="space-between" flex="1">
        <Box>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              mt: 0.5,
            }}
          >
            {desc}
          </Typography>
        </Box>

        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
          🔐 Protected by 4-digit PIN
        </Typography>
      </Box>
    </Box>
  );
};

export default Folder;
