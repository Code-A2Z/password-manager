import type { ReactNode } from "react";
import {
  useState,
  useCallback,
  useContext,
  createContext,
} from "react";
import {
  Snackbar,
  Alert,
} from "@mui/material";

export type NotificationSeverity = "success" | "error" | "info" | "warning";

type NotifyFn = (message: string, severity: NotificationSeverity) => void;

interface NotificationContextType {
  notify: NotifyFn;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<NotificationSeverity>("info");

  const notify = useCallback((msg: string, sev: NotificationSeverity = "info") => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ borderRadius: 2, boxShadow: 2 }}
        >
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export function useNotify(): NotifyFn {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotify must be used within a NotificationProvider");
  }
  return context.notify;
}
