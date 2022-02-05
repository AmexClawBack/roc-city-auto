import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

// images
import ROC from "../../Images/asd.jpg"
import slideOne from "../../Images/slide-1.jpg"
import slideTwo from "../../Images/slide-2.jpg"
import slideThree from "../../Images/slide-4.jpg"
import Nissan from "../../Images/nissan.jpg"
import GT from "../../Images/gt.jpg"
import Escape from "../../Images/escape.jpg"

const Home = () => {
   
    return (
        <main className="page landing-page">

            {/* MAIN LANDING PAGE/BACKGROUND */}
        <section className="clean-block clean-hero " className="background ">
            <div className="text d-flex justify-content-center flex-column align-items-center ">
                <div className='firstText'>
                
                <h1 className='ml-2 mr-2 pl-2 pr-2 titleMargin textColor '>Your <span>#1 Place</span> For Used Cash Cars In Dallas </h1>
                <button className="btn btn-danger btn-lg  shadow-lg btnMargin" type="button">Browse Inventory</button>
            </div>
            </div>
        </section>

        {/* COMPANY INFO */}
        <section className="clean-block clean-info dark" style={{backgroundColor: "#526638"}}>
            <div className="container">
                <div className="block-heading">
                    <div className="row ">
                        <div className="col mt-5 d-flex align-items-center flex-column justify-content-center"><img className="img-fluid photo" src={ROC} />
                            <h1 style={{fontSize: "35px"}}>The #1 Cash Car Dealer in Dallas</h1>
                            <p>Roc City Auto is an independently-owned cash car dealer that excels in customer service, competitive pricing, and quality assurance. We look forward to assisting you in an effortless auto buying experience.</p>
                            <div className='d-flex '>
                            <button className="btn btn-primary" type="button">Call Us!</button>
                            <button className="btn btn-primary" type="button" style={{marginLeft: "5%"}}>Message Us!</button>
                        </div>
                        </div>

                         {/* IMAGE CARASEL */}
                        <div className="col mt-5">
                            <div className="carousel slide" data-bs-ride="carousel" id="carousel-2">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" ><img className="img-fluid" src={slideOne} alt="Slide Image" style={{height: "100%"}}/></div>
                                    <div className="carousel-item"><img  className="img-fluid" src={slideTwo} alt="Slide Image"/></div>
                                    <div className="carousel-item"><img  className="img-fluid"src={slideThree} alt="Slide Image"/></div>
                                </div>
                                <div><a className="carousel-control-prev" href="#carousel-2" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-2" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                <ol className="carousel-indicators">
                                    <li data-bs-target="#carousel-2" data-bs-slide-to="0" className="active"></li>
                                    <li data-bs-target="#carousel-2" data-bs-slide-to="1"></li>
                                    <li data-bs-target="#carousel-2" data-bs-slide-to="2"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEXT AND BUTTON AFTER CARASEL */}
                <div className="row align-items-center ">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h3>The best place to buy used cash cars in Dallas</h3>
                        <div className="getting-started-info">
                            <p>At Roc City Auto we believe the customer is always right. That's why before you even come in, we know what you need. We specialize in used cash car in Dallas. Come in today and let us show you why we're #1</p>
                        </div><a className="btn btn-outline-primary btn-lg mb-5" role="button" href="about-us.html">About Us</a>
                    </div>
                </div>
            </div>
        </section>

        {/* GOOGLE MAP */}
        <section className="clean-block features" style={{backgroundColor: "#f5efe9"}}>
            <div className="container">
                <div className="block-heading "><iframe className="mt-5" allowFullScreen="" frameBorder="0" loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCnwEOGKgCKDmJTXl_Y40B9Cl9-VzSNvM0&amp;q=2086+Jim+Miller+rd%2C+Dallas+TX+75217&amp;zoom=10" width="100%" height="400"></iframe>
                </div>
                </div>
                </section>

                {/* FEATURED VEHICLES */}
                <section className="clean-block features" style={{backgroundColor: "#f5efe9"}}>
                <div className="row justify-content-center " >
                    <div className="col justify-content-start">
                        <h1 className="text-center  mt-5 mb-5" style={{fontSize: "24px", fontWeight: "bold", color: "var(--bs-gray-700)"}}><span style={{color: "#75935f"}}>[ </span>FEATURED VEHICLES <span style={{color: "#75935f"}}>]</span></h1>
                        <div className="card-group mt-5 mb-5">

                            {/* CARD ONE */}
                            <div className="card" style={{marginRight: "20px"}}><img className="img-fluid card-img-top w-100 d-block justify-content-around" src={Nissan} style={{height: "200px"}}/>
                                <div className="card-body">
                                    <h4 className="flex-column justify-content-center card-title">2005 Nissan Sentra</h4>
                                    <p className="d-flex flex-column justify-content-center card-text">Newly acquired&nbsp; 2005 Nissan Sentra that will get you where you need to go!&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><button className="btn btn-primary d-flex flex-column justify-content-center" type="button">$3,500</button>
                                </div>
                            </div>

                            {/* CARD TWO */}
                            <div className="card" style={{marginRight: "20px"}}><img className="img-fluid card-img-top w-100 d-block justify-content-around" src={Escape} style={{height: "200px"}}/>
                                <div className="card-body">
                                    <h4 className="d-flex flex-column justify-content-center card-title">2009 Ford escape</h4>
                                    <p className="d-flex flex-column justify-content-center card-text">Perfect for the small family, this mid-size suv is sure to get your family where they need to go.&nbsp;&nbsp;</p><button className="btn btn-primary d-flex flex-column justify-content-center" type="button">$6,750</button>
                                </div>
                            </div>
                            
                            {/* CARD THREE */}
                            <div className="card"><img className="img-fluid card-img-top w-100 d-block d-flex justify-content-around" src={GT} style={{height: "200px"}}/>
                                <div className="card-body">
                                    <h4 className="d-flex flex-column justify-content-center card-title">2010 Mustang GT</h4>
                                    <p className="card-text">This Mustang is sure to turn heads wherever you go. Don't miss out on this steal!</p><button className="btn btn-primary d-flex flex-column justify-content-center" type="button">$12,000</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>

        {/* */}
       
    </main>
    );
}

export default Home;
