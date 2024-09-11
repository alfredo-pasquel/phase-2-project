import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

function AddCreditForm() {
  const { addCredit } = useOutletContext(); 
  const navigate = useNavigate();  

  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCredit = { title, role, year, image };

    fetch('https://phase-2-project-api.onrender.com/music_credits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCredit),
    })
      .then((res) => res.json())
      .then((data) => {
        addCredit(data); 
        setTitle('');
        setRole('');
        setYear('');
        setImage('');
        navigate(`/credits/${data.id}`); 
      });
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '65vh',
        marginTop: 6,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add New Music Credit
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Role"
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <TextField
          label="Year"
          fullWidth
          margin="normal"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <TextField
          label="Image URL"
          fullWidth
          margin="normal"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: '20px' }}
        >
          Add Credit
        </Button>
      </Box>
    </Container>
  );
}

export default AddCreditForm;
