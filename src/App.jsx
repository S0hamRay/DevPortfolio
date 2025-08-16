import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Achievements, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import './App.css'
import { polygons } from './assets'
import { waves2 } from './assets';
import { polyGrid } from './assets';
import {projectBlobs} from './assets';

const App = () => {
  return (
    <BrowserRouter style = {{width:'100%'}}>
      <div style = {{width: '100%'}}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='achievements-background'>
          <Achievements />
        </div>
            
        <Tech />
        <div className='works-background'>
          <Works />
        </div>   
            
        <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
        </div>
        <div className='py-5'>
          &nbsp;
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

