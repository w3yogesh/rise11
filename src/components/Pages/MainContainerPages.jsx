import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Claim from '../Forms/Claim';
export default function MainContainerPages() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          bgcolor: '#f4f5fc',
          boxShadow: 'none',
          padding: 3,
          height: '85%',
          width: '100%', 
          overflow: 'auto', 
          pt:0,
          marginTop: '2px'
        }}
      >
        <Claim  />
      </Container>
    </React.Fragment>
  );
}
