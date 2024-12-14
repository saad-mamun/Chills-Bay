import 'antd/dist/reset.css'
import './App.css'
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import DrinkPage from './Components/DrinkPage/DrinkPage';
import Club from './Components/Club/Club';
import Payment from './Components/PaymentPage/Payment';
import Contact from './Components/ContactPage/Contact';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/drink' element={ <DrinkPage/> } />
          <Route path='/club' element={ <Club/> } />
          <Route path='/cart' element={ <Payment/> } />
          <Route path='/contact' element={ <Contact/> } />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
