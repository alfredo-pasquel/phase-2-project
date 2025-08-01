// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [bio, setBio] = useState('');
  const [bioImage, setBioImage] = useState('');
  const [knownForCredits, setKnownForCredits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://phase-2-project-api.onrender.com/main')
      .then((response) => response.json())
      .then((data) => {
        setBio(data[0].biography);
        setBioImage(data[0].image);
      });

    const creditIds = [42, 33, 39];
    Promise.all(
      creditIds.map((id) =>
        fetch(`https://phase-2-project-api.onrender.com/music_credits/${id}`).then((response) =>
          response.json()
        )
      )
    )
      .then((data) => {
        setKnownForCredits(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container sx={{ marginTop: '60px', paddingBottom: '15px', maxWidth: 'lg' }}>
      {/* <Box
        sx={{
          position: 'relative',
          height: { xs: 'auto', md: '450px' },
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > */}
        {/* <Typography
          variant="h6"
          sx={{
            position: 'relative',
            color: '#fff',
            padding: { xs: '10px', md: '20px' },
            zIndex: 1,
            textAlign: 'center',
            maxWidth: { xs: '90%', md: '60%' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)', // Improve text readability
          }}
        >
          {bio}
        </Typography> */}
      {/* </Box> */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          marginTop: '50px',
          marginLeft: { xs: '0', md: '130px' },
          marginBottom: '50px',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Known For:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {knownForCredits.map((credit) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={credit.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card sx={{ width: '100%', maxWidth: '300px' }}>
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
                  <Typography variant="body2">
                    {credit.role} ({credit.year})
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/credits')}
          sx={{marginTop: '15px', marginBottom: '75px'}}
        >
          View All Credits
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
