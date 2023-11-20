import './styles/Donate.css';
import React from "react";

const Donate = () => {
    return (
        <main className="donate-page page border">
            <h1 className="donate__title">
                Support CastPress
            </h1>
            <p className="donate__text">
                Help us continue to break down silos and spread knowledge through CastPress.
                By being funded, with your valuable donations, we can continue to bring you podcast content that is fresh, relevant and helps you grow.
            </p>
            <div className="donate__button button">
                <div className="button_text">
                    Donate Now
                </div>
                <span className="simple-arrow icon-simple-arrow-right"></span>
            </div>
        </main>
    );
}

export default Donate;