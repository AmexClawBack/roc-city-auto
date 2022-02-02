import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css"




const Footer = ({ FontAwesomeIcon, faFacebook, faInstagram, faTwitter }) => {
    return (
       
            <footer className="footer" id="footerBackground">
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                           <img src="" alt="roc-city-auto logo" />
                            <h3 className= "centerText">214-251-3713</h3>
                            <p className= "centerText">2086 Jim Miller rd,<br />Dallas, TX 75217</p>
                            <p className= "centerText"></p>
                        </div>
                        <div className="col-sm-6 col-md-3 item centerText "  >
                            <h3><span>[ </span>Social<span> ]</span></h3>
                            <ul>
                                <li className= "centerText">< Link to="#" className='links'><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></li>
                                <li className= "centerText">< Link to="#" className='links'><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></li>
                                <li className= "centerText">< Link to="#" className='links'><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text mt-2">
                            <h3><span style={{color: "#75935f"}}>[ </span>Roc-City-Auto<span style={{color:"#75935f"}}> ]</span></h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div >
                        
                       
                    </div>
                    <p className="copyright d-flex justify-content-center" >Company Name © 2022</p>
                </div>
            </footer>
        
    );
}

export default Footer;
