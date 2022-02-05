// import { useContext } from 'react'
import { faSun, faCloud, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import UserContext from ".../.../contexts/UserContext"



import "./Nav.css"

const Nav = (weather, FontAwesomeIcon) => {
  console.log(weather)
   
  // const lightmode = useContext(UserContext)
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg navigation-clean navContainer text-light shadow-lg fixed-top"
      
    >
       <div className="container-fluid">
        <Link
          className="navbar-brand text-light"
          to="/" 
        >
            
        ROC CITY AUTOS' CASH CARS
        </Link>

      {/* WEATHER API */}
        <div>{weather.weather.name}</div>
        <div>{weather.weather.main?.temp}</div>
        

      {/* CONDITIONAL RENDERING FOR WEATHER API DISPLAY */}

                  {/* ========== STACKOVERFLOW QUESTION BELOW ========== */}
     
        {/* {
        
          weather.weather.weather?.main === "Sun" ? <FontAwesomeIcon icon={faSun} /> && <div>Its nice and sunny! Come on out to see us!</div> : null
        }
        {
          weather.weather.weather[0]?.main === "Clouds" ? <FontAwesomeIcon icon={faCloud} /> && <div>It's a little cloudy, but rest assured, we are open and ready to help you!</div> : null
        }
        {
          weather.weather.weather?.main === "Rain" ? <FontAwesomeIcon icon={faCloudRain} /> && <div>It's a little wet outside but we're open. Come on in!</div> : null
        } */}
        
        {/* ========== STACK OVERFLOW QUESTION ABOVE ========== */}
            
            {/* MOBILE NAV BAR */}
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-1" className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">

            {/* HOME */}
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                to="/"
                
              >
                Home
              </Link>
            </li>

            {/* INVENTORY */}
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="inventory"
                
              >
                Inventory
              </Link>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="contact"
              
              >
                Contact Us
              </Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="about"
                
              >
                About Us
              </Link>
            </li>
          </ul>
            </div>
      </div> 
    </nav>
  );
};

export default Nav;
