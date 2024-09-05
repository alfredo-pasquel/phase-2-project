import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootLayout = ({ searchTerm, handleSearch, credits, addCredit }) => {
  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <main>
        <Outlet context={{ searchTerm, credits, addCredit }} />
      </main>
    </div>
  );
};

export default RootLayout;
