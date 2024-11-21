// src/components/NavBar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

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

  // State for the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handle opening the menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ zIndex: 1000 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side: Logo or Name */}
        <Button href="/" sx={{ color: 'inherit', textTransform: 'none', fontSize: 20 }}>
          Alfredo Pasquel
        </Button>

        {/* Center: Search Bar */}
        <TextField
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search Credits"
          sx={{
            width: '300px',
            marginLeft: '100px',
          }}
          variant="outlined"
          align="center"
        />

        {/* Right side: Hamburger Menu */}
        <Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                navigate('/credits');
                handleClose();
              }}
            >
              Credits
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/add-credit');
                handleClose();
              }}
            >
              Add Credit
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/awards');
                handleClose();
              }}
            >
              Awards
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
