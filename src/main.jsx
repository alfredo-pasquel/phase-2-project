// src/App.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import RootLayout from './layouts/RootLayout';
import CreditsList from './components/CreditsList';
import AddCreditForm from './components/AddCreditForm';
import Awards from './components/Awards';
import Home from './components/Home';
import CreditDetail from './components/CreditDetail';
import BackgroundWrapper from './components/BackgroundWrapper'; // Import BackgroundWrapper

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [credits, setCredits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addCredit = (newCredit) => {
    setCredits([...credits, newCredit]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <BackgroundWrapper>
          <RootLayout
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            credits={credits}
            addCredit={addCredit}
          />
        </BackgroundWrapper>
      ),
      children: [
        { path: '', element: <Home /> },
        { path: 'credits', element: <CreditsList /> },
        { path: 'credits/:id', element: <CreditDetail /> },
        // { path: 'add-credit', element: <AddCreditForm /> },
        { path: 'awards', element: <Awards /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
