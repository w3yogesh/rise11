import React, { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import ProgressBar from "./components/Shared/ProgressBar";
import { Box, Container } from "@mui/material";
import MainContainerPages from "./components/Pages/MainContainerPages";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleDrawer = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
     {isSidebarOpen && <Sidebar open={isSidebarOpen} onClose={toggleDrawer} />}
      <Box sx={{ flexGrow: 1, height: "100%", overflow: "hidden" }}>
        <Navbar toggleDrawer={toggleDrawer} />
        <Box sx={{ padding: 1 }}>
          <ProgressBar />
          <Container maxWidth={false} disableGutters>
            <Box
              sx={{
                bgcolor: "#f4f5fc",
                height: "calc(100vh - 64px)",
                borderTopLeftRadius: "40px",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <MainContainerPages />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
