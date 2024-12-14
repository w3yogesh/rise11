import Box from "@mui/material/Box";
import React from "react";

const BottomLine = ({open = true}) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
        backgroundColor: 'primary.main',
        height:'3px',
        visibility: open ? 'visible' : 'hidden',
        width: '100%',
      }}
    >
    </Box>
  );
};

export default BottomLine;