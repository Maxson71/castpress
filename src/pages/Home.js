import React from 'react';
import '../styles/Home.css';
import AudioPlayer from "../components/AudioPlayer";

function Home() {
    return (
        <main className="home-page border">
            <AudioPlayer/>
        </main>
    );
}

export default Home;