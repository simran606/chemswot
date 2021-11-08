import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/homescreen.css';

function HomeScreen() {
    return (
        <div className="homescreen-div">
            <div className="row">
                <div className="col-lg-7">
                    <p className="wl">Welcome to IB chemistry</p>
                    <h1>Structured Complete Course In Ib Chemistry</h1>
                    <p className="lrn">Learn from the best having 20+ Years experience</p>
                    <Button>Buy Now</Button>
                </div>
                <div className="col-lg-5">
                    <img alt="img-homescreen" src="../../Images/1.png" />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
