import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';
import About from './components/pages/about';
import Navbar from './components/navbar'



function App() {
  const [currentPage, setCurrentPage] = useState('Contact');

  const displayPage = ()=>{
    if(currentPage === 'Portfolio') {
      return(
        
             <div>
          <Portfolio />
        </div>
      )
    } else if (currentPage ==='Resume') {
      return(
        <div><Resume /> </div>
      )
    } else if (currentPage ==='Contact') {
      return(
        <div>
          <Contact />
        </div>
      )
    } else {
      return(
        <div>
          <About />
        </div>
      )
    }
  }

  const handleSetState = (page)=>{
  setCurrentPage(page)
  }
  
  return(
    <>
    <Navbar setPage={handleSetState}/>
    {displayPage()}
    </>
  )
  
}

export default App;
