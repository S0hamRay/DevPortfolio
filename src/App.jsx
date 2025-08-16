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
        <div style = {{ 
      backgroundImage: `url(${polygons})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
    marginTop: '80px'}}><Achievements /></div>
            
            <Tech />
            <div style = {{ 
      backgroundImage: `url(${projectBlobs})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
    marginTop: '80px'}}><Works /></div>   
            
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

