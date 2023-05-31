import React from 'react';
import donate from '../icons/donatebackground.png';
export default function Donate(props) {
    return (
        <div className='container'>
            <div id="static-pages-text">
                <h1>Donate to help wildlife conservation</h1>
                <h4>Whether it's your time, money, or knowledge, all efforts towards conservation count.</h4>
            </div>

            <div className='cardpage'>
                <div className='card-container d-flex flex-wrap justify-content-between align-items-end' >
                    <div className="card col-md-3 col-lg-3">
                        <img className="card-img-top" alt="Card cap" src={donate} />
                        <div className="card-body">
                            <div className='cardHeading'>
                                <h2 className='CardPage CardTitle'>Ocean Conservation Resource</h2>
                                <p className='cardLabel'>International NGO</p>
                            </div>
                            <div>
                                <a href="https://oceanconservancy.org/" className="btn btn-primary">Donate</a>
                            </div>
                        </div >
                    </div>
                    <div className="card col-md-3 col-lg-3">
                        <img className="card-img-top" alt="Card cap" src={donate} />
                        <div className="card-body">
                            <div className='cardHeading'>
                                <h2 className='CardPage CardTitle'>Underwater Sustainablility Group</h2>
                                <p className='cardLabel'>International NGO</p>
                            </div>
                            <div>
                                <a href="https://www.underwatersustainability.org/" className="btn btn-primary">Donate</a>
                            </div>
                        </div >
                    </div>
                    <div className="card col-md-3 col-lg-3">
                        <img className="card-img-top" alt="Card cap" src={donate} />
                        <div className="card-body">
                            <div className='cardHeading'>
                                <h2 className='CardPage CardTitle'>Coral Reef Enthusiast Org</h2>
                                <p className='cardLabel'>International NGO</p>
                            </div>
                            <div>
                                <a href="https://www.coral.org/" className="btn btn-primary">Donate</a>
                            </div>

                        </div >
                    </div>
                </div>
            </div>
        </div>
    );
}