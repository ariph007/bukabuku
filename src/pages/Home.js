import { Menu } from '@mui/material';
import React from 'react'
import Logo2 from '../assets/capture3.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

function Home() {
  return (
    <>
    <Navbar/>
    <div className='home'>
        <div className='headerContainer'>
            <img src={Logo2} alt='logo_bukabuku'/>
        </div>
    <Menu/>
    <Footer/>
    </div>
    </>
  )
}

export default Home