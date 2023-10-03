import React, { useState, useRef } from 'react';

import '../styles/AudioPlayer.css';
const curent__image = "../img/curent-episode.jpg"
const curent__audio = "../audio/file_example_MP3_5MG.mp3"
function AudioPlayer() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        setCurrentTime(current);
    };

    return (
        <div className="curent-episode">
            <img src={curent__image} alt="" className="curent-episode__image"/>
            <h1 className="curent-episode__title">How to rapidly test any experience!</h1>
            <div className="curent-episode__audio">
                <button onClick={playPauseHandler}>
                    <img src={isPlaying ? "icon-pause.svg" : "icon-play.svg"} alt="Play/Pause" />
                </button>
                <span>{`${Math.floor(currentTime / 60)}:${(currentTime % 60).toFixed(0).padStart(2, '0')}`}</span>
                <div className="audio-progress-bar">
                    <div style={{ width: `${(currentTime / 165) * 100}%` }}></div>
                </div>
                <span>2:45</span>
                <button>
                    <img src="icon-volum.svg" alt="Volume" />
                </button>
                <button>
                    <img src="icon-dounload.svg" alt="Download" />
                </button>
            </div>
            <h6 className="curent-episode__link-title">LISTEN ON</h6>
            <div className="curent-episode__link">
            </div>
            <audio
                ref={audioRef}
                src={curent__audio}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={(e) => setCurrentTime(e.target.duration)}
            />
        </div>
    );
}

export default AudioPlayer;