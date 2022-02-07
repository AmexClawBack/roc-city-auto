// import { useContext } from 'react'
import { faSun, faCloud, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import UserContext from ".../.../contexts/UserContext"

import { faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons' 



import "./Nav.css"

const Nav = ({ weather }) => {
  console.log(weather)
   
  // const lightmode = useContext(UserContext)
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg navigation-clean navContainer text-light shadow-lg fixed-top  "
      
    >
       <div className="container-fluid">
        <Link
          className="navbar-brand text-light"
          to="/" 
        >
            
        ROC CITY AUTOS' CASH CARS
        </Link>


        {/*  ICONS TO CALL EMAIL AND THE ADRESS, ICONS INCLUDED*/}

      {/* WEATHER API */}
        <div>{weather.name}</div>
        <div>{weather.main.temp}</div>
        

      {/* CONDITIONAL RENDERING FOR WEATHER API DISPLAY */}

                  {/* ========== STACKOVERFLOW QUESTION BELOW ========== */}
     
        {/* {
        
          weather.weather[0].main === "Sun" ? <><FontAwesomeIcon icon={faSun} /> <div>Its nice and sunny! Come on out to see us today!</div> </> : null
        }
        {
          weather.weather[0].main === "Clouds" ? <><FontAwesomeIcon icon={faCloud} />  <div>It's a little cloudy, but rest assured, we are open and ready to help get you into a used cash car!</div></> : null
        }
        {
          weather.weather[0].main === "Rain" ? <><FontAwesomeIcon icon={faCloudRain} />  <div>It's a little wet outside but we're open. Come on in to see our selection of used cash cars!</div></> : null
        }
        {
          weather.weather[0].main === "Clear" ? <><FontAwesomeIcon icon={faSun} />  <div>The weather is nice. Let us get you in a used cash car today!</div></> : null
        }
         */}
                  {/* ========== STACK OVERFLOW QUESTION ABOVE ========== */}
            
            {/* MOBILE NAV BAR */}
        <button
          className="navbar-toggler "
          data-bs-toggle="collapse "
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

            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="blog"
                
              >
                Blog
              </Link>
            </li>
          </ul>
            </div>
      </div> 
     
    </nav>
  );
};

export default Nav;
