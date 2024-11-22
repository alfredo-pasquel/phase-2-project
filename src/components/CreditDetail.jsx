// src/components/CreditDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Container } from '@mui/material';

function CreditDetail() {
  const { id } = useParams();
  const [credit, setCredit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://phase-2-project-api.onrender.com/music_credits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCredit(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching credit detail:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Stack items vertically
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: 2,
        }}
      >
        <CircularProgress />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  if (!credit) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Stack items vertically
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: 2,
        }}
      >
        <Typography variant="h6">Credit not found</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        {credit.title}
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        Year: {credit.year}
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        Role: {credit.role}
      </Typography>
      <Box
        component="img"
        src={credit.image}
        alt={credit.title}
        sx={{
          width: '100%',        // Image takes full width of container
          height: 'auto',
          maxWidth: '500px',    // Limit the maximum width
          marginTop: '20px',
          borderRadius: '8px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',  // Center the image
        }}
      />
    </Container>
  );
}

export default CreditDetail;
