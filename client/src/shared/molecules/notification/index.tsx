import React, { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

let listeners: ((msg: string, severity: NotificationSeverity) => void)[] = [];

export type NotificationSeverity = "success" | "error" | "info" | "warning";

export const notify = (message: string, severity: NotificationSeverity = "info") => {
  listeners.forEach((cb) => cb(message, severity));
};

const Notification: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<NotificationSeverity>("info");

  useEffect(() => {
    const handler = (msg: string, sev: NotificationSeverity) => {
      setMessage(msg);
      setSeverity(sev);
      setOpen(true);
    };
    listeners.push(handler);
    return () => {
      listeners = listeners.filter((l) => l !== handler);
    };
  }, []);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={severity}
        variant="filled"
        sx={{ borderRadius: 2, boxShadow: 2 }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
