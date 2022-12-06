import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';
import About from './components/pages/about';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
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
  // const [page, setPage] = useState()
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

App()
export default App;
