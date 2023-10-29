import './styles/Header.css';
import {useState} from "react";
import {Link} from "react-router-dom";

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
                <Link to={process.env.PUBLIC_URL+"/"} className="logo">Castpress.</Link>
                <nav className="menubar">
                    <div className="menubar__button">
                        <div className="episodes" onClick={toggleEpisodesMenu}>
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
                            <SwiperSlide><Link to="/castpress/episode&1">Episode 1</Link></SwiperSlide>
                            <SwiperSlide><Link to="/castpress/episode&2">Episode 2</Link></SwiperSlide>
                            <SwiperSlide><Link to="/castpress/episode&3">Episode 3</Link></SwiperSlide>
                            <SwiperSlide><Link to="/castpress/episode&4">Episode 4</Link></SwiperSlide>
                            <SwiperSlide><Link to="/castpress/episode&5">Episode 5</Link></SwiperSlide>

                        </Swiper>
                    )}
                    <div className="menubar__button">
                        <Link to={process.env.PUBLIC_URL+"/blog"}>
                            BLOG
                        </Link>
                    </div>
                    <div className="menubar__button"><Link to={process.env.PUBLIC_URL+"/contact"}>CONTACT</Link></div>
                    <div className="menubar__button">
                        <Link to={process.env.PUBLIC_URL+"/donate"}
                           className="donate"
                           onMouseEnter={handleDonateHover}
                           onMouseLeave={handleDonateLeave}
                        >
                            <span className={isHovered ? 'icon-heart-fill' : 'icon-heart'}></span>
                            DONATE
                        </Link>
                    </div>
                    <div className="menubar__button"><span className="icon-search"></span></div>
                </nav>
            </div>
            <span className="decor"></span>
        </header>
    );
}
export default Header;
