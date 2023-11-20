import React from 'react';
import {Route, useParams} from "react-router-dom";

import './styles/Episode.css';
import AudioPlayer from "../components/AudioPlayer";
import Error from "./Error";

export const Episode = (props) => {
    const { episodeId } = useParams();

    const currentEpisode = props.episodes.find(episode => episode.id.toString() === episodeId);

    if (!currentEpisode) {
        return (
            <Error error={"episode"}/>
        );
    }
    else {
        return (
            <main className="episode-page page border">
                <AudioPlayer currentEpisode={currentEpisode}></AudioPlayer>
            </main>
        );
    }
}

export default Episode;