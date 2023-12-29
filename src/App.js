import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Offers from './pages/Offers';
import ReactGA from 'react-ga4';
import NewOffers from './pages/NewOffers';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';

const Measurement_ID = 'G-678K43VV21'; 
ReactGA.initialize(Measurement_ID);

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
    <Route path="offers" element={<NewOffers/>}/>
    </Route>

   </Routes>
   </BrowserRouter>
   <Footer/>
   
   </>
  );
}

export default App;
