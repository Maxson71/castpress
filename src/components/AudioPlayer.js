import React, {useState, useRef, useEffect} from 'react';

import '../styles/AudioPlayer.css';

const download__icon = "../icons/download-icon.jpg"
const play__icon = "../icons/play-icon.jpg"
const pause__icon = "../icons/pause-icon.jpg"
const volume__icon = "../icons/volume-icon.jpg"

const curent__image = "../img/curent-episode.jpg"
const curent__audio = "../audio/file_example_MP3_5MG.mp3"

function AudioPlayer() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);


    useEffect(() => {
        const onLoadedMetadata = () => {
            setDuration(audioRef.current.duration);
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('loadedmetadata', onLoadedMetadata);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('loadedmetadata', onLoadedMetadata);
            }
        };
    }, []);

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

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const onProgressClick = (e) => {
        const { offsetWidth } = e.target;
        const clickX = e.nativeEvent.offsetX;
        const duration = audioRef.current.duration;
        const newTime = (clickX / offsetWidth) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    return (
        <div className="curent-episode">
            <img src={curent__image} alt="" className="curent-episode__image"/>
            <h1 className="curent-episode__title">How to rapidly test any experience!</h1>
            <div className="curent-episode__audio">
                <div className="audio-play-button" onClick={playPauseHandler}>
                    <img className="audio-button__image" src={isPlaying ? play__icon : pause__icon} alt="Play/Pause" />
                </div>
                <h6 className="audio-curent-time">{formatTime(currentTime)}</h6>
                <div className="audio-progress-bar"
                     onClick={onProgressClick}
                >
                    <div style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                </div>
                <h6 className="audio-full-time">{formatTime(duration)}</h6>
                <div className="audio-volume-button">
                    <img className="audio-button__image" src={volume__icon} alt="Volume" />
                </div>
                <div className="audio-download-button">
                    <img className="audio-button__image" src={download__icon} alt="Download" />
                </div>
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