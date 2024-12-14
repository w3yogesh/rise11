import React from "react";
import { TextField, Typography, Box, MenuItem, Select } from "@mui/material";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #1e83ff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#000",
  },
});

const ClaimValue = () => {
  return (
    <Box sx={{ width: "360px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CalculateOutlinedIcon sx={{ fontSize: "24px", color: "#1e83ff" }} />
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          Claim Value
        </Typography>
      </Box>
      <Box sx={{ display: "flex", paddingLeft: "50px", paddingRight: "50px" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CustomTextField
              label="Contract Value"
              type="number"
              fullWidth
              margin="normal"
              size="small"
              sx={{ backgroundColor: "#f4f5fc", borderRadius: "8px" }}
            />
            <Select
              defaultValue="USD"
              size="small"
              sx={{
                marginTop: 1,
                border: "none",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CustomTextField
              label="Claim Value"
              type="number"
              fullWidth
              margin="normal"
              size="small"
              sx={{ backgroundColor: "#f4f5fc", borderRadius: "8px" }}
            />
            <Select
              defaultValue="USD"
              size="small"
              sx={{
                marginTop: 1,
                border: "5px",
                border: "none",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Box>
          <Typography
            variant="caption"
            color="#ffab45"
            sx={{ fontWeight: 500 }}
          >
            150% of Contract Value
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClaimValue;
