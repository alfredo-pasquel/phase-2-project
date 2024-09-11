import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Container, Card, CardActionArea, CardMedia, Grid2 } from '@mui/material';

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
        maxWidth: '100%',
      }}
    >
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        sx={{
          width: '100%',
          margin: '0 auto',
          gap: '4px',
        }}
      >
        {filteredCredits.map((credit) => (
          <Grid2 key={credit.id}>
            <Card>
              <CardActionArea component={Link} to={`/credits/${credit.id}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={credit.image}
                  alt={credit.title}
                  sx={{ objectFit: 'cover', width: '100%' }}
                />
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default CreditsList;
