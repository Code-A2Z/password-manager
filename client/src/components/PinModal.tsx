import { Box, Modal, Typography, TextField, IconButton, Stack } from "@mui/material";
import { useAtom } from "jotai";
import { pinModalStateAtom } from "../shared/atoms/ModalAtom";
import { useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const PinModal = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(pinModalStateAtom);
  const [pin, setPin] = useState(["", "", "", ""]);

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Allow only single digit
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleClose = () => {
    setPin(["", "", "", ""]);
    setIsModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box
        sx={{
          width: 300,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          mx: 'auto',
          mt: '20vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" fontWeight="bold" mb={2}>
          Enter your 4-digit PIN
        </Typography>

        <Stack direction="row" spacing={2}>
          {pin.map((digit, idx) => (
            <TextField
              key={idx}
              inputRef={(el) => (inputsRef.current[idx] = el)}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  padding: '0.5rem',
                },
              }}
              sx={{
                width: '3rem',
              }}
              autoFocus={idx === 0}
            />
          ))}
        </Stack>
      </Box>
    </Modal>
  );
};

export default PinModal;
