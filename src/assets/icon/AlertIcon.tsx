import { Alert } from "@mui/material";

interface AlertIconProps {
  label: string;
  status: "success" | "info" | "warning" | "error";
  variant: "filled" | "outlined" | "standard";
}

export const AlertIcon = ({ label, status, variant }: AlertIconProps) => {
  return (
    <Alert variant={variant} severity={status}>
      {label}
    </Alert>
  );
};
