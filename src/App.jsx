import React, { Fragment } from 'react';
import './App.css'
import { Route, Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import { Box, createTheme } from '@mui/material';


const App = () => {

  return (
    <>
      <Box sx={{
        backgroundColor: '#14161a',
        color:'white',
        minHeight: '100vh'
      }}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Homepage />} exact/>
          <Route path='/coins/:id' element={<Coinpage/>}/>
        </Routes>
      </Box>
    </>
  );
};

export default App;