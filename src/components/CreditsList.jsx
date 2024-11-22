// src/components/CreditsList.jsx
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Container, Card, CardActionArea, CardMedia, Grid } from '@mui/material';

const CreditsList = () => {
  const [credits, setCredits] = useState([]);
  const { searchTerm } = useOutletContext();

  useEffect(() => {
    fetch('https://phase-2-project-api.onrender.com/music_credits')
      .then((res) => res.json())
      .then((data) => {
        setCredits(data);
      });
  }, []);

  const filteredCredits = credits.filter((credit) =>
    credit.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container
      sx={{
        marginTop: 4,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        maxWidth: 'lg',
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      >
        {filteredCredits.map((credit) => (
          <Grid
            item
            key={credit.id}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card sx={{ width: '100%', maxWidth: '300px' }}>
              <CardActionArea component={Link} to={`/credits/${credit.id}`}>
                <CardMedia
                  component="img"
                  image={credit.image}
                  alt={credit.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '2 / 3', // Use 2:3 aspect ratio for movie posters
                  }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CreditsList;
