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
      <Box sx={{ textAlign: 'center', marginBottom: 1 }}>
        {bioImage && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1
           }}>
            <img
              src={bioImage}
              alt="Alfredo Pasquel"
              style={{
                maxWidth: '350px',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        )}
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          {bio}
        </Typography>
      </Box>
      <Typography variant="h5" gutterBottom sx={{marginLeft: "130px"}}>
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
