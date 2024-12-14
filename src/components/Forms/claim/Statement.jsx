import React from "react";
import { Typography, Box, Button } from "@mui/material";
import MyCard from "./MyCard";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Statement = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected PDF file:", file.name);
    }
  };

  return (
    <MyCard
      title="Statement"
      Icon={
        <ReceiptLongOutlinedIcon
          style={{ fontSize: "30px", color: "#1e83ff" }}
        />
      }
    >
      <Box
        sx={{
          backgroundColor: "#f4f5fc",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <Button
          component="label"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
            color: "#1e83ff",
          }}
        >
          <CloudUploadIcon style={{ fontSize: "30px" }} />
          <Typography fontSize={14} fontWeight={500}>
            Upload a PDF
          </Typography>
          <input type="file" accept=".pdf" hidden onChange={handleFileChange} />
        </Button>
      </Box>
    </MyCard>
  );
};

export default Statement;
