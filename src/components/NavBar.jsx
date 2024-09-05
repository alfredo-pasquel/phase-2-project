import React, { useState } from 'react';
import { AppBar, Toolbar, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    onSearch(searchTerm);

    if (searchTerm.length > 0) {
      navigate('/credits');
    }
  };

  return (
    <AppBar position="static" sx={{ zIndex: 1000 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button href="/" sx={{ color: 'inherit', textTransform: 'none', fontSize: 20 }}>
          Alfredo Pasquel
        </Button>
        <TextField
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search Credits"
          sx={{ 
            width: '300px', 
            marginLeft: '100px'
          }}
          variant="outlined"
          align="center"
        />
        <Box>
          <Button href="/credits" sx={{ color: 'inherit' }}>Credits</Button>
          <Button href="/add-credit" sx={{ color: 'inherit' }}>Add Credit</Button>
          <Button href="/awards" sx={{ color: 'inherit' }}>Awards</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
