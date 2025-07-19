import { Box, Typography } from "@mui/material";
import { FolderIcon } from "lucide-react";

const Folder = ({
  name,
  desc
}: {
  name: string;
  desc: string;
}) => {
  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        gap: '8px',
      }}
    >
      <FolderIcon size={24} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{desc}</Typography>
        <Typography variant="caption">Protected by 4-digit Pin</Typography>
      </Box>
    </Box>
  )
}

export default Folder;
