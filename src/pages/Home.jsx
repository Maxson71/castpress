import React from 'react';
import './styles/Home.css';
import AudioPlayer from "../components/Home/AudioPlayer";
import LatestPost from "../components/Home/LatestPost";
import Team from "../components/Home/Team";

function Home(props) {
    return (
        <main className="home-page page border">
            <AudioPlayer episodes={props.episodes}/>
            <Team team={props.team}/>
            <LatestPost blogs={props.blogs}/>
        </main>
    );
}
export default Home;