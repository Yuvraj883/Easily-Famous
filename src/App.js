import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Offers from './pages/Offers';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
    <Route path="offers" element={<Offers/>}/>
    </Route>

   </Routes>
   </BrowserRouter>
   
   <Home/>
   </>
  );
}

export default App;
