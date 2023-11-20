import React from 'react';
import './styles/Home.css';
import AudioPlayer from "../components/AudioPlayer";
import LatestPost from "../components/LatestPost";
import Team from "../components/Team";
import Error from "./Error";
import {Route} from "react-router-dom";

function Home(props) {

    const currentEpisode = props.episodes.find(episode => episode.id.toString() === "4");

    if (!currentEpisode) {
        return (
            <Route path=":query" element={<Error title={"Episode not found"}/>}/>
        );
    }
    else {
        return (
            <main className="home-page page border">
                <AudioPlayer currentEpisode={currentEpisode}></AudioPlayer>
                <Team team={props.team}/>
                <LatestPost blogs={props.blogs}/>
            </main>
        );
    }
}
export default Home;