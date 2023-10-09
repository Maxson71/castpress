import '../styles/Header.css';
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
                <a href={process.env.PUBLIC_URL+"/"} className="logo">Castpress.</a>
                <nav className="menubar">
                    <div className="menubar__button">
                        <div id="episodes" onClick={toggleEpisodesMenu}>
                            EPISODES
                            <span className={isEpisodesMenuOpen ? "simple-arrow icon-simple-arrow-bottom" : "simple-arrow icon-simple-arrow-top"}></span>
                        </div>
                    </div>
                    {isEpisodesMenuOpen && (
                        <Swiper className="episodes-menu"
                                direction={"vertical"}
                                modules={[Scrollbar]}
                                spaceBetween={8}
                                slidesPerView={3.8}
                                scrollbar={{ draggable: true }}
                                mousewheel={{ invert: false , forceToAxis: true }}
                                freeMode={true}
                        >
                            <SwiperSlide><a href="/castpress/episode/1">Episode 1</a></SwiperSlide>
                            <SwiperSlide><a href="/castpress/episode/2">Episode 2</a></SwiperSlide>
                            <SwiperSlide><a href="/castpress/episode/3">Episode 3</a></SwiperSlide>
                            <SwiperSlide><a href="/castpress/episode/4">Episode 4</a></SwiperSlide>
                            <SwiperSlide><a href="/castpress/episode/5">Episode 5</a></SwiperSlide>
                            <SwiperSlide><a href="/castpress/episode/6">Episode 6</a></SwiperSlide>
                            <SwiperSlide><a href="/castpress/episode/7">Episode 7</a></SwiperSlide>
                            <SwiperSlide><a href="/castpress/episode/8">Episode 8</a></SwiperSlide>
                        </Swiper>
                    )}
                    <div className="menubar__button">
                        <a href={process.env.PUBLIC_URL+"/blog"}>
                            BLOG
                        </a>
                    </div>
                    <div className="menubar__button"><a href={process.env.PUBLIC_URL+"/contact"}>CONTACT</a></div>
                    <div className="menubar__button">
                        <a id="donate" href={process.env.PUBLIC_URL+"/donate"}
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
