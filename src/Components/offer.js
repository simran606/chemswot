import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/offer.css';


function Offer() {
    return (
        <div className="offer-div">
           <img className="bg" alt="offer" src="../../Images/bg-1.png" />
            <h1>OFFERS BY CHEMSWOT</h1>
            <div className="row">
                <div className="col-lg-4 offer-col">
                    <h5>Montly Plan</h5>
                    <p>Get all at just 500</p>
                    <Button>Buy Now</Button>
                </div>
                <div className="col-lg-4 img-div">
                    <img alt="offer" src="../../Images/5.png" />
                </div>
                <div className="col-lg-4 offer-col">
                    <h5>Yearly Plan</h5>
                    <p>Get all at just 5000</p>
                    <Button>Buy Now</Button>
                </div>
            </div>
            <img className="bg" alt="offer" src="../../Images/bg-2.png" />
        </div>
    )
}

export default Offer;


