import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

function Awards() {
  const [awards, setAwards] = useState({ nominations: [], wins: [] });

  useEffect(() => {
    fetch('https://phase-2-project-api.onrender.com/awards')
      .then((res) => res.json())
      .then((data) => {
        setAwards(data);
      });
  }, []);

  return (
    <Container>
      <Box 
        sx={{




          textAlign: 'center',
          width: '100%',


          marginTop: 6,
          overflow: 'auto',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Awards and Nominations
        </Typography>
        <Typography variant="h5" gutterBottom textAlign="center">
          Wins
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {awards.wins.map((win) => (
            <ListItem key={win.id} sx={{ width: '100%', maxWidth: '600px' }}>
              <ListItemText
                primaryTypographyProps={{ textAlign: 'center' }}  
                secondaryTypographyProps={{ textAlign: 'center' }}
                primary={`${win.award} - ${win.category}`}
                secondary={`For: "${win.work}" by ${win.artist} (${win.year})`}
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }} textAlign="center">
          Nominations
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {awards.nominations.map((nomination) => (
            <ListItem key={nomination.id} sx={{ width: '100%', maxWidth: '600px' }}>
              <ListItemText
                primaryTypographyProps={{ textAlign: 'center' }} 
                secondaryTypographyProps={{ textAlign: 'center' }}
                primary={`${nomination.award} - ${nomination.category}`}
                secondary={`For: ${nomination.work} (${nomination.year})`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default Awards;
