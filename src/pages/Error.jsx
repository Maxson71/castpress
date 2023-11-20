import React from 'react';
import "./styles/Error.css";
import {Link} from "react-router-dom";

const Error = (props) => {
    return (
        <main className="page404 page border">
            <div className="error404">
                <h1 className="error404__title">
                    404
                </h1>
                <h1 className="error404__subtitle">
                    {props.error} not found
                </h1>
                <h4 className="error404__description">
                    This {props.error} not found (deleted or never exists).<br/>
                    Try a phrase in search box or back to home and start again.
                </h4>
                <Link to={process.env.PUBLIC_URL+"/"} className="error404__button button">
                    <div className="button_text">
                        HOMEPAGE
                    </div>
                    <span className="simple-arrow icon-simple-arrow-right"></span>
                </Link>
            </div>
        </main>
    );
}

export default Error;