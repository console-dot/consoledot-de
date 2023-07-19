import { Box } from "@mui/material";

export const Overlay = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.8)",
        zIndex: 1,
      }}
    ></Box>
  );
};
