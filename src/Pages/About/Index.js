import React from 'react';
import "./About.css"

const About = () => {
    return (
        <main className="page relative ">
        <section className="clean-block about-us ">
            <div className="container ">
                <div className="block-heading  mt-5 mb-5">
                    <h2 className="text-info ">About Us</h2>
                    <p>We are a team of dedicated car professionals with over 30 years of experience helping get people into cash cars</p>
                </div>
                <div className="row justify-content-center mb-5">
                    
                    <div className="col-sm-6 col-lg-4 ">
                        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar2.jpg"/>
                            <div className="card-body info">
                                <h4 className="card-title">Terrick</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><a href="#"><i className="icon-social-facebook"></i></a><a href="#"><i className="icon-social-instagram"></i></a><a href="#"><i className="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar3.jpg"/>
                            <div className="card-body info">
                                <h4 className="card-title">Brian</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><a href="#"><i className="icon-social-facebook"></i></a><a href="#"><i className="icon-social-instagram"></i></a><a href="#"><i className="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default About;
