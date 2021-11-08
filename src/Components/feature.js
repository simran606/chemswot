import React from 'react';
import '../styles/feature.css';

function Feature() {
    return (
        <div className="feature-div">
            <h3>FEATURES</h3>
            <div className="row rr">
                <div className="col-lg-6 column-one">
                    <h1>Chemswot Offers the Following Main Benefits</h1>
                </div>
                <div className="col-lg-6 column-two">
                    <p>Our Resources will help you achieve your dream Ib diploma score by our accurate topic detail capturing</p>
                </div>
            </div>
            <div className="row feature-row">
                <div className="col-lg-4">
                    <div className="mt-div">
                        <img className="feature-img" alt="features" src="../../Images/2.png" />
                        <h4>Accurate Notes</h4>
                        <p>Includes designed Mindmaps and puzzles </p>
                    </div>
                </div>
                <div className="col-lg-4 selected-col">
                    <div className="mt-div">
                        <img className="feature-img" alt="features" src="../../Images/3.png" />
                        <h4>Animated PPT's</h4>
                        <p>Includes textbook questions and examples </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mt-div">
                        <img className="feature-img" alt="features" src="../../Images/4.png" />
                        <h4>Topicwise Quiz</h4>
                        <p>Includes MCQ Paper 1 type questions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;
