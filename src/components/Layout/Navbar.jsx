import React from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Navbar = ({ toggleDrawer }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        height: "50px", // Smaller height for the app bar
      }}
    >
      <Toolbar sx={{ minHeight: "50px" }}> 
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer} 
          sx={{
            mr: 2, 
            fontSize: "20px", // Smaller size for the menu icon
          }}
        >
          <MenuIcon
            sx={{
              color: "#1784ff",
              fontSize: "20px", 
            }}
          />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />{" "}
        {/* Takes up all available space to push icons to the right */}
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            width: "80px",
          }}
        >
          <NotificationsNoneOutlinedIcon
            sx={{
              color: "#1e83ff",
              mr: 1,
              fontSize: "22px", // Smaller size for the notification icon
            }}
          />
          <PersonOutlineOutlinedIcon
            sx={{
              color: "#1e83ff",
              ml: 2,
              fontSize: "22px", // Smaller size for the person icon
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
