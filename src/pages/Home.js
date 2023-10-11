import React from 'react';
import '../styles/Home.css';
import AudioPlayer from "../components/AudioPlayer";

function Home() {
    return (
        <main className="home-page border">
            <AudioPlayer/>
            <div className="latest-posts">
                <h1 className="latest-posts__title">
                    Latest Posts
                </h1>
                <div className="latest-posts__list">
                    <div className="latest-posts__item">
                        <img src="" alt="" className="latest-posts__img"/>
                        <div className="latest-posts__info">
                            <h2 className="latest-posts__title"></h2>
                            <h5 className="latest-posts__date"></h5>
                            <h5 className="latest-posts__more"></h5>
                        </div>
                    </div>
                </div>
                <div className="blog__button">
                    <h5>
                        View Blog
                    </h5>
                </div>
            </div>
        </main>
    );
}

export default Home;