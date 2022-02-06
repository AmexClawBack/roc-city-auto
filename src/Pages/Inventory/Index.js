import React from 'react';
import "./Inventory.css"

const Inventory = () => {
    return (
        <main className="page catalog-page " className="marginTop">
        <section className="clean-block clean-catalog dark ">
            <div className="container ">
                <div className="block-heading">
                    <h2 className="text-info ">Inventory</h2>
                    <p>Browse our entire inventory of used cash cars</p>
                </div>
                <div className="content "></div>
                <div className="card-group ">

                    {/* CARD ONE */}
                    <div className="card m-2"><img className="card-img-top w-100 d-block "/>
                        <div className="card-body">
                            <img src="" alt="car1"/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>

                    {/* CARD TWO */}
                    <div className="card m-2"><img className="card-img-top w-100 d-block"/>
                        <div className="card-body">
                        <img src="" alt=""/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>

                    {/* CARD THREE */}
                    <div className="card m-2"><img className="card-img-top w-100 d-block"/>
                        <div className="card-body">
                        <img src="" alt=""/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>
                </div>

                {/* CARD FOUR */}
                <div className="card-group">
                    <div className="card m-2"><img className="card-img-top w-100 d-block"/>
                        <div className="card-body">
                        <img src="" alt=""/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>

                    {/* CARD FIVE */}
                    <div className="card m-2"><img className="card-img-top w-100 d-block"/>
                        <div className="card-body">
                        <img src="" alt=""/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>

                    {/* CARD SIX */}
                    <div className="card m-2"><img className="card-img-top w-100 d-block"/>
                        <div className="card-body">
                        <img src="" alt=""/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>
                </div>

                {/* CARD SEVEN */}
                <div className="card-group">
                    <div className="card m-2"><img className="card-img-top w-100 d-block"/>
                        <div className="card-body">
                        <img src="" alt=""/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>

                    {/* CARD EIGHT */}
                    <div className="card m-2"><img className="card-img-top w-100 d-block"/>
                        <div className="card-body">
                        <img src="" alt=""/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>

                    {/* CARD NINE */}
                    <div className="card m-2"><img className="card-img-top w-100 d-block"/>
                        <div className="card-body">
                        <img src="" alt=""/>
                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Inventory;
