import React from 'react';
import './styles/Home.css';
import AudioPlayer from "../components/Home/AudioPlayer";
import LatestPost from "../components/Home/LatestPost";
import Team from "../components/Home/Team";

function Home() {
    return (
        <main className="home-page page border">
            <AudioPlayer/>
            <Team/>
            <LatestPost/>
        </main>
    );
}

export default Home;