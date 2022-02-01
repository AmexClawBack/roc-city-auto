//Imports
import axios from 'axios'
import {useState, useEffect} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'

//Components
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

//Pages
import Home from "./Pages/Home"
import Inventory from "./Pages/Inventory"
import Contact from "./Pages/Contact"
import About from "./Pages/About"

// CSS
import "./App.css";

// Contexts
import UserContext from "./Contexts/UserContext"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
