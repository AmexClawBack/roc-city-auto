import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css"
import Logo from "../../Images/asd.jpg"



const Footer = ({ FontAwesomeIcon, faFacebook, faInstagram, faTwitter }) => {
    return (
       
            <footer className="footer" id="footerBackground">

                {/* COMPANY INFO IN FOOTER */}
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item ">
                           <img src={Logo} className="logo" alt="roc-city-auto logo" />
                            <h3 className= "centerText mt-2">214-251-3713</h3>
                            <p className= "centerText">2086 Jim Miller rd,<br />Dallas, TX 75217</p>
                            <p className= "centerText"></p>
                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="col-sm-6 col-md-3 item centerText mt-5 "  >
                            <h3><span>[ </span>Social<span> ]</span></h3>
                            <ul className='d-flex flex-column gap-2'>
                                <li className= "centerText ">< Link to="#" className='links'><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></li>
                                <li className= "centerText">< Link to="#" className='links'><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></li>
                                <li className= "centerText">< Link to="#" className='links'><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></li>
                            </ul>
                        </div>

                        {/* COMPANY BIO */}
                        <div className="col-md-6 item text mt-5">
                            <h3><span style={{color: "#75935f"}}>[ </span>Roc City Cash Cars<span style={{color:"#75935f"}}> ]</span></h3>
                            <p >Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div >
                        
                       
                    </div>
                    <p className="copyright d-flex justify-content-center" >Roc City Auto, LLC. © 2022</p>
                </div>
            </footer>
        
    );
}

export default Footer;
