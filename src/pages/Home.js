import React from 'react';
import '../style/Home.css';
const curent__image = "../img/curent-episode.jpg"
const curent__audio = "../audio/file_example_OOG_5MG.ogg"

function Home() {
    return (
        <main className="home-page">
            <div className="curent-episode">
                <img src={curent__image} alt="" className="curent-episode__image"/>
                <h1 className="curent-episode__title">How to rapidly test any experience!</h1>
                <div className="curent-episode__audio">
                    <audio controls>
                        <source src={curent__audio} type="audio/ogg"/>
                    </audio>
                </div>
                <h6 className="curent-episode__link-title">LISTEN ON</h6>
                <div className="curent-episode__link">
                </div>
            </div>
        </main>
    );
}

export default Home;