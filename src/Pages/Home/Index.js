import React from 'react';
import './Home.css';
import carLot from "../../Images/Lot-Font.png"

const Home = () => {
   
    return (
        <main className="page landing-page">
        <section className="clean-block clean-hero" className="background">
            <div className="text">
                <h2>You have the cash, we have the car!</h2>
                <p>#1 Cash Car Dealer in the Dallas Fort-Worth Metroplex</p><button className="btn btn-outline-light btn-lg" type="button">See Why!</button>
            </div>
        </section>
        <section className="clean-block clean-info dark">
            <div className="container">
                <div className="block-heading">
                    <div className="row">
                        <div className="col"><img className="img-fluid" src="assets/img/star.svg"/>
                            <h1 style={{fontSize: "35px"}}>The #1 Cash Car Dealer in Dallas</h1>
                            <p>Roc-City-Auto is an independent-owned leading cash car dealer that excels in customer service, competitive pricing, and quality assurance. We look forward to assisting you in a smooth and easy auto buying experience.</p><button className="btn btn-primary" type="button">Call Us!</button><button className="btn btn-primary" type="button" style={{marginLeft: "5%"}}>Message Us!</button>
                        </div>
                        <div className="col">
                            <div className="carousel slide" data-bs-ride="carousel" id="carousel-2">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" style={{height: "100%"}}><img className="img-fluid w-100 d-block" src="assets/img/external-content.duckduckgo.com.jpg" alt="Slide Image" style={{height: "100%"}}/></div>
                                    <div className="carousel-item"><img className="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image"/></div>
                                    <div className="carousel-item"><img className="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image"/></div>
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
                <div className="row align-items-center">
                    <div className="col-md-6"><img className="img-thumbnail" src="assets/img/scenery/Screenshot%20(108).png"/></div>
                    <div className="col-md-6">
                        <h3>The best place to buy used cash cars in Dallas</h3>
                        <div className="getting-started-info">
                            <p>At Roc-City-Auto we believe the customer is always right. That's why before you even come in, we know what you need. We specialize in used cash car in Dallas. Come in today and let us show you why we're #1</p>
                        </div><a className="btn btn-outline-primary btn-lg" role="button" href="about-us.html">About Us</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="clean-block features">
            <div className="container">
                <div className="block-heading"><iframe allowFullScreen="" frameBorder="0" loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCnwEOGKgCKDmJTXl_Y40B9Cl9-VzSNvM0&amp;q=2086+Jim+Miller+rd%2C+Dallas+TX+75217&amp;zoom=10" width="100%" height="400"></iframe></div>
                <div className="row justify-content-center">
                    <div className="col justify-content-start">
                        <h1 className="text-center" style={{fontSize: "24px", fontWeight: "bold", color: "var(--bs-gray-700)"}}>[ FEATURED VEHICLES ]</h1>
                        <div className="card-group">
                            <div className="card" style={{marginRight: "20px"}}><img className="img-fluid card-img-top w-100 d-block justify-content-around" src="assets/img/nissan.jpg" style={{height: "200px"}}/>
                                <div className="card-body">
                                    <h4 className="flex-column justify-content-center card-title">2005 Nissan Sentra</h4>
                                    <p className="d-flex flex-column justify-content-center card-text">Newly acquired&nbsp; 2005 Nissan Sentra that will get you where you need to go!&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><button className="btn btn-primary d-flex flex-column justify-content-center" type="button">$3,500</button>
                                </div>
                            </div>
                            <div className="card" style={{marginRight: "20px"}}><img className="img-fluid card-img-top w-100 d-block justify-content-around" src="assets/img/escape.jpg" style={{height: "200px"}}/>
                                <div className="card-body">
                                    <h4 className="d-flex flex-column justify-content-center card-title">2009 Ford escape</h4>
                                    <p className="d-flex flex-column justify-content-center card-text">Perfect for the small family, this mid-size suv is sure to get your family where they need to go.&nbsp;&nbsp;</p><button className="btn btn-primary d-flex flex-column justify-content-center" type="button">$6,750</button>
                                </div>
                            </div>
                            <div className="card"><img className="img-fluid card-img-top w-100 d-block d-flex justify-content-around" src="assets/img/gt.jpg" style={{height: "200px"}}/>
                                <div className="card-body">
                                    <h4 className="d-flex flex-column justify-content-center card-title">2010 Mustang GT</h4>
                                    <p className="card-text">This Mustang is sure to turn heads wherever you go. Don't miss out on this steal!</p><button className="btn btn-primary d-flex flex-column justify-content-center" type="button">$12,000</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="clean-block about-us">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Drop In!</h2>
                    <p>Let our team of experts get you into a used cash car today!</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col"><img className="img-fluid" src="assets/img/external-content.duckduckgo.com.jpg"/></div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Home;
