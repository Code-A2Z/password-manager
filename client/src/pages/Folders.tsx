import { Box, Typography } from "@mui/material";
import Folder from "../components/Folder";

const FakeFolders = [
  { id: 1, name: "Work", desc: "Work-related passwords" },
  { id: 2, name: "Personal", desc: "Personal passwords" },
  { id: 3, name: "Travel", desc: "Travel-related passwords" },
]

const Folders = () => {
  return (
    <Box
      sx={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Typography variant="h4">Folders</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        {FakeFolders.map(folder => (
          <Folder key={folder.id} name={folder.name} desc={folder.desc} />
        ))}
      </Box>
    </Box>
  );
};

export default Folders;
