//Imports
import axios from 'axios'
import {useState, useEffect} from 'react'
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

  const [weather, setWeather] = useState([])

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = async () => {
    try {
      const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?lat=32.779167&lon=-96.808891&appid=a91119eebbd33281141d01dd1405669b")
      setWeather(response.data)
      // console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  
  return (
    <div className="App">
      {weather.name}
    </div>
  );
}

export default App;
