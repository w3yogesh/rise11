import React from "react";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

const FileUpload = ({ title = "Upload the Contract" }) => {
  const [file, setFile] = useState(null);

  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <Box
      component="label"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dotted #1e83ff",
        borderRadius: "10px",
        gap: "10px",
        width: "120px",
        height: "150px",
        // padding: "20px",
        backgroundColor: "#f4f5fc",
        cursor: "pointer",
      }}
    >
      <CloudUploadIcon style={{ fontSize: "30px", color: "#1e83ff" }} />
      <Typography fontSize={10}>{title}</Typography>
      <Typography fontSize={10} color="#1e83ff" fontWeight={500}>
        Max 2MB, PDF
      </Typography>
      {/* Hidden file input */}
      <input
        type="file"
        hidden
        accept=".pdf"
        onChange={(e) => {
          if (handleFileChange) {
            handleFileChange(e.target.files[0]); // Trigger the callback function
          }
        }}
      />
      {file && <p>Uploaded File: {file.name}</p>}
    </Box>
  );
};

export default FileUpload;
