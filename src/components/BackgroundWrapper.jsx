// src/components/BackgroundWrapper.jsx
import React from 'react';
import { Box } from '@mui/material';
import backgroundImage from '../assets/AP05.jpg'; // Update the path and filename

function BackgroundWrapper({ children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.5, // Adjust opacity as desired
          zIndex: -1,
        },
      }}
    >
      {/* Main content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for content
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundWrapper;
