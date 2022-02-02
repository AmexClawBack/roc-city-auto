// import { useContext } from 'react'
import { Link } from "react-router-dom";
// import UserContext from ".../.../contexts/UserContext"

import "./Nav.css"

const Nav = () => {
  // const lightmode = useContext(UserContext)
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg navigation-clean navContainer"
      
    >
       <div className="container-fluid">
        <Link
          className="navbar-brand "
          to="/" 
        >
            
        Roc-City-Auto
        </Link>
            
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
            <li className="nav-item">
              <Link
                className="nav-link active "
                to="/"
                
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to="inventory"
                
              >
                Inventory
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to="contact"
              
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
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
