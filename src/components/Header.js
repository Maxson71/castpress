import './Header.css';
import {useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Scrollbar} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/scrollbar';
function Header() {

    const [isHovered, setIsHovered] = useState(false);

    const handleDonateHover = () => {setIsHovered(true);};
    const handleDonateLeave = () => {setIsHovered(false);};


    const [isEpisodesMenuOpen, setIsEpisodesMenuOpen] = useState(false);
    const toggleEpisodesMenu = () => {
        setIsEpisodesMenuOpen(!isEpisodesMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-border">
                <a href="/" className="logo">Castpress.</a>
                <nav className="menubar">
                    <div className="menubar__button">
                        <a id="episodes" href="#" onClick={toggleEpisodesMenu}>
                            EPISODES
                            <span className={isEpisodesMenuOpen ? "simple-arrow icon-simple-arrow-bottom" : "simple-arrow icon-simple-arrow-top"}></span>
                        </a>
                    </div>
                    {isEpisodesMenuOpen && (
                        <Swiper className="episodes-menu"
                                direction={"vertical"}
                                modules={[Scrollbar]}
                                spaceBetween={8}
                                slidesPerView={3.8}
                                scrollbar={{ draggable: true }}
                                mousewheel={{ invert: false , forceToAxis: true }} /* Додано налаштування прокрутки миші */
                                freeMode={true} /* Додано для включення режиму вільної прокрутки */
                        >
                            <SwiperSlide><a href="/episode_1">Episode 1</a></SwiperSlide>
                            <SwiperSlide><a href="/episode_2">Episode 2</a></SwiperSlide>
                            <SwiperSlide><a href="/episode_3">Episode 3</a></SwiperSlide>
                            <SwiperSlide><a href="/episode_4">Episode 4</a></SwiperSlide>
                            <SwiperSlide><a href="/episode_5">Episode 5</a></SwiperSlide>
                            <SwiperSlide><a href="/episode_6">Episode 6</a></SwiperSlide>
                            <SwiperSlide><a href="/episode_7">Episode 7</a></SwiperSlide>
                            <SwiperSlide><a href="/episode_8">Episode 8</a></SwiperSlide>
                        </Swiper>
                    )}
                    <div className="menubar__button">
                        <a href="/blog">
                            BLOG
                        </a>
                    </div>
                    <div className="menubar__button"><a href="/contact">CONTACT</a></div>
                    <div className="menubar__button">
                        <a id="donate" href="/donate"
                           onMouseEnter={handleDonateHover}
                           onMouseLeave={handleDonateLeave}
                        >
                            <span className={isHovered ? 'icon-heart-fill' : 'icon-heart'}></span>
                            DONATE
                        </a>
                    </div>
                    <div className="menubar__button"><span className="icon-search"></span></div>
                </nav>
            </div>
            <span className="decor"></span>
        </header>
    );
}
export default Header;