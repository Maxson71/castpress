import React from 'react';
import {useParams} from "react-router-dom";

import './styles/Episode.css';
import AudioPlayer from "../components/AudioPlayer";
import Error from "./Error";

function Paragraph(props) {
    return (
        <div className="episode-page__paragraph">
            <h2 className="episode-page__heading">{props.heading}</h2>
            <p className="episode-page__text">{props.text}</p>
        </div>
    );
}

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
                {currentEpisode.content.map((content, index) => (
                    <Paragraph
                        key={index}
                        heading={content.heading}
                        text={content.text}
                    />
                ))
                }

            </main>
        );
    }
}

export default Episode;