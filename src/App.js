import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Offers from './pages/Offers';
import ReactGA from 'react-ga4';
import NewOffers from './pages/NewOffers';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import FAQs from './pages/FAQs';

const Measurement_ID = 'G-56Z70W2EJC'; 
ReactGA.initialize(Measurement_ID);

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
    <Route path="offers" element={<NewOffers/>}/>
    <Route path="faq" element={<FAQs/>}/>
    </Route>

   </Routes>
   </BrowserRouter>
   <Footer/>
   
   </>
  );
}

export default App;
