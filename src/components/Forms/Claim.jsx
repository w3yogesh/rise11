import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


import Heading from "../Forms/claim/Heading";
import ClaimValue from "../Forms/claim/ClaimValue";
import Place from "../Forms/claim/Place";
import Language from "../Forms/claim/Language";
import Statement from "../Forms/claim/Statement";
import AgreementUnderDisputes from "../Forms/claim/AgreementUnderDisputes";
import AdditionalDocumentation from "../Forms/claim/AdditionalDocumentation";

export default function Claim() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        borderRadius: 4,
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        overflow: "auto",
        scrollbarWidth: "none",
      }}
    >
      <Heading />
      <Container>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Enable wrapping for smaller screens
            gap: 2,
            padding: 2,
            justifyContent: "space-between",
            overflow: "auto",
          }}
        >
          {/* Box for each component */}
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)", // 33.33% width for 3 items per row, accounting for gap
              minWidth: "300px", // Ensure a minimum width
            }}
          >
            <ClaimValue />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <Place />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <Language />
          </Box>
        </Box>
      </Container>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Enable wrapping for smaller screens
            gap: 2,
            padding: 2,
            justifyContent: "space-between",
            overflow: "auto",
          }}
        >
          {/* Box for each component */}
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)", // 33.33% width for 3 items per row, accounting for gap
              minWidth: "300px", // Ensure a minimum width
            }}
          >
            <Statement />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <AgreementUnderDisputes />
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(33.33% - 16px)",
              minWidth: "300px",
            }}
          >
            <AdditionalDocumentation />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
