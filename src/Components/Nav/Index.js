// import { useContext } from 'react'
import { faSun, faCloud, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import UserContext from ".../.../contexts/UserContext"

import { faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons' 



import "./Nav.css"

const Nav = ({ weather }) => {
  console.log(weather)
  // function temperatureConverter(valNum) {
  //   valNum = parseFloat(valNum);
  //   document.getElementById("outputFarenheit").innerHTML=((valNum-273.15)*1.8)+32;

  // }
  const kelvin = weather.main.temp;
  const celsius = kelvin - 273;

  let fahrenheit = Math.floor(celsius * (9/5) + 32)
  // const lightmode = useContext(UserContext)
  return (
    
    
    <nav
    className="navbar navbar-light navbar-expand-lg navigation-clean navContainer text-light shadow-lg  "
    
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
      <div className="d-flex flex-row gap-2">
        <div>{weather.name}</div>
        <div>{fahrenheit}&#176;</div>
   


      {/* CONDITIONAL RENDERING FOR WEATHER API DISPLAY ... KEEP IT SIMPLE, ONLY RENDER ICONS */}

                 
                 
     
        {
        
          weather.weather[0].main === "Sun" ?  <FontAwesomeIcon icon={faSun} />   : null
        }
        {
          weather.weather[0].main === "Clouds" ? <FontAwesomeIcon icon={faCloud} />   : null
        }
        {
          weather.weather[0].main === "Rain" ? <FontAwesomeIcon icon={faCloudRain} />   : null
        }
        {
          weather.weather[0].main === "Clear" ?  <FontAwesomeIcon icon={faSun} />   : null
}
</div>
                  

                  {/* ADD NAVBAR ICONS */}


                
            
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
