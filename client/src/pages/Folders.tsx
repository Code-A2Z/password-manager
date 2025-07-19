import { Box, Typography } from "@mui/material";
import Folder from "../components/Folder";

const FakeFolders = [
  { id: 1, name: "Work Passwords Safety Box", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 2, name: "Personal", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 3, name: "Travel", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 4, name: "Finance", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 5, name: "Social Media", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 6, name: "Shopping", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 7, name: "Utilities", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 8, name: "Health", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 9, name: "Education", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
  { id: 10, name: "Entertainment", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque esse id neque soluta commodi odit quidem ipsum recusandae repudiandae?" },
];

const Folders = () => {
  return (
    <Box
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="text.primary">
        Your Folders
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',   // 1 column on extra small
            sm: 'repeat(2, 1fr)',   // 2 on small
            md: 'repeat(3, 1fr)',   // 3 on medium
            lg: 'repeat(4, 1fr)',   // 4 on large and up
          },
          gap: '3rem',
        }}
      >
        {FakeFolders.map(folder => (
          <Folder
            key={folder.id}
            name={folder.name}
            desc={folder.desc}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Folders;
