import React from "react";
import {
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";

const Language = () => {
  return (
    <Box sx={{ width: "360px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TranslateOutlinedIcon style={{ fontSize: "30px", color: "#1e83ff" }} />
        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 500 }}>
          Language
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Box>
          <TextField
            label="Select the language for proceedings"
            fullWidth
            margin="normal"
            size="small"
            sx={{
              fontSize: "14px",
              backgroundColor: "#f4f5fc",
              borderRadius: "8px",
            }}
          />
          <Typography sx={{ fontSize: "14px", marginTop: "8px" }}>
            Is the language for the proceedings the one mentioned in the
            agreement?
          </Typography>
          <RadioGroup row>
            <FormControlLabel
              value="yes"
              control={<Radio size="small" />}
              label={
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  Yes
                </Typography>
              }
            />
            <FormControlLabel
              value="no"
              control={<Radio size="small" />}
              label={
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  No
                </Typography>
              }
            />
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Language;
