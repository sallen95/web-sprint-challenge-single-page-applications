import React from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import pizza from './Assets/Pizza.jpg'



function App() {


  return (
    <div>

      <div>
        <h1>Lambda Eats</h1>
        <p>header here</p>
        <Link to={'/'}>Home</Link>
        <Link to={'/pizza'}>Pizza?</Link>

        <div className='home-image'>
          <img src={pizza} alt='pizza' />
        </div>
      </div>



    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
