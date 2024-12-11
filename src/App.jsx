import 'antd/dist/reset.css'
import './App.css'
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/HomePage';

function App() {


  return (
    <>
      <Navbar />
      <Home/>
      <Footer/>
    </>
  )
}

export default App
