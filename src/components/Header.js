import './Header.css';
import {useState} from "react";

function Header() {

    const [isHovered, setIsHovered] = useState(false);

    const handleDonateHover = () => {
        setIsHovered(true);
    };

    const handleDonateLeave = () => {
        setIsHovered(false);
    };

    return (
        <header className="header">
            <div className="header-border">
                <a href="/" className="logo">Castpress.</a>
                <nav className="menubar">
                    <div>
                        <a id="episodes" href="/episodes">
                            EPISODES
                            <span className="icon-simple-arrow-bottom"></span>
                        </a>
                    </div>
                    <div>
                        <a href="/blog">
                            BLOG
                        </a>
                    </div>
                    <div><a href="/contact">CONTACT</a></div>
                    <div>
                        <a id="donate" href="/donate"
                           onMouseEnter={handleDonateHover}
                           onMouseLeave={handleDonateLeave}
                        >
                            <span className={isHovered ? 'icon-heart-fill' : 'icon-heart'}></span>
                            DONATE
                        </a>
                    </div>
                    <div><span className="icon-search"></span></div>
                </nav>
            </div>
            <span className="decor"></span>
        </header>
    );
}
export default Header;