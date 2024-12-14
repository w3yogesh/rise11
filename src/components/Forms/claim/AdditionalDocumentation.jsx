import React, { useRef } from "react";
import { Typography, Button, Box } from "@mui/material";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import MyCard from "./MyCard";
import FileUpload from "../../Forms/FileUpload";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const AdditionalDocumentation = () => {
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => fileInputRef.current?.click();

  return (
    <MyCard
      title="Additional Documentation"
      Icon={
        <DifferenceOutlinedIcon
          sx={{ fontSize: "30px", color: "#1e83ff" }}
        />
      }
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <FileUpload />
        <Button
          component="label"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
            height: "120px",
            backgroundColor: "#f4f5fc",
            borderRadius: "8px",
            cursor: "pointer",
            ":hover": { backgroundColor: "#e9ebf7" },
          }}
          onClick={handleFileInputClick}
        >
          <ControlPointOutlinedIcon
            sx={{ fontSize: "40px", color: "#1e83ff" }}
          />
          <input
            type="file"
            hidden
            ref={fileInputRef}
          />
        </Button>
      </Box>
    </MyCard>
  );
};

export default AdditionalDocumentation;
