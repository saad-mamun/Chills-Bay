import 'antd/dist/reset.css'
import './App.css'
import React from 'react';
import Navbar from './Components/Navbar';
import HeroArea from './Components/HeroArea';
import Image from './Components/Image';
import ThingsCard from './Components/ThingsCard';
import ChillsBay from './Components/ChillsBay';

function App() {


  return (
    <>
      <Navbar/>
      <HeroArea/>
      <Image/>
      <ThingsCard/>
      <ChillsBay/>
    </>
  )
}

export default App
