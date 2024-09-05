import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Card, CardMedia, CardContent, CardActionArea, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const [bio, setBio] = useState('');
  const [bioImage, setBioImage] = useState('');
  const [knownForCredits, setKnownForCredits] = useState([]);

  useEffect(() => {
    fetch('https://phase-2-project-api.onrender.com/main')
      .then((response) => response.json())
      .then((data) => {
        setBio(data[0].biography);
        setBioImage(data[0].image);
      });

    const creditIds = [4, 13, 7];
    Promise.all(
      creditIds.map((id) =>
        fetch(`https://phase-2-project-api.onrender.com/music_credits/${id}`).then((response) => response.json())
      )
    )
      .then((data) => {
        setKnownForCredits(data);
      })
      .catch((error) => {
        console.error('Error fetching specific credits:', error);
      });
  }, []);

  return (
    <Container sx={{ marginTop: '15px', paddingBottom: '15px', maxWidth: '100%' }}>
      {/* Biography Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: '450px',
          width: '100%',
          backgroundImage: `url(${bioImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        }}
      >
        {/* Semi-transparent overlay behind the text */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent black overlay
          }}
        />
        <Typography
          variant="h6"
          sx={{
            position: 'relative', // Position text relative to the overlay
            color: '#fff',
            padding: '20px',
            zIndex: 1, // Make sure the text is above the overlay
            textAlign: 'center',
          }}
        >
          {bio}
        </Typography>
      </Box>

      {/* Known For Section */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: '50px', marginLeft: '130px' }}>
        Known For:
      </Typography>
      <Grid2 container spacing={2} justifyContent="center">
        {knownForCredits.map((credit) => (
          <Grid2
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              flexBasis: '25%',
              maxWidth: '300px',
              display: 'flex',
              justifyContent: 'center',
            }}
            key={credit.id}
          >
            <Card sx={{ width: '100%' }}>
              <CardActionArea component={Link} to={`/credits/${credit.id}`}>
                <CardMedia
                  component="img"
                  height="450"
                  image={credit.image}
                  alt={credit.title}
                  sx={{ objectFit: 'cover', width: '100%' }}
                />
                <CardContent>
                  <Typography variant="h6">{credit.title}</Typography>
                  <Typography variant="body2">{credit.role} ({credit.year})</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Home;
