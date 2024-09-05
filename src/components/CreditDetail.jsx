import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';

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
        console.error("Error fetching credit detail:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box  
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          width: '100vw', 
          textAlign: 'center' 
        }}
      >
        <CircularProgress />
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  if (!credit) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          width: '100vw', 
          textAlign: 'center' 
        }}
      >
        <Typography variant="h6">Credit not found</Typography>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '90vh', 
        width: '100vw', 
        textAlign: 'center',
        padding: '20px' 
      }}
    >
      <Typography variant="h4" gutterBottom>
        {credit.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Year: {credit.year}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Role: {credit.role}
      </Typography>
      <Box 
        component="img" 
        src={credit.image} 
        alt={credit.title} 
        sx={{ 
          width: '500px',
          height: 'auto', 
          marginTop: '20px', 
          borderRadius: '8px' 
        }} 
      />
    </Box>
  );
}

export default CreditDetail;
