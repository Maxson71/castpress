import './styles/Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer border">
            <span className="decor"></span>
            <div className="footer__content">
                <nav className="footer__menu">
                    <Link to={process.env.PUBLIC_URL+"/episodes"}><h5>Episodes</h5></Link>
                    <Link to={process.env.PUBLIC_URL+"/blog"}><h5>Blog</h5></Link>
                    <Link to={process.env.PUBLIC_URL+"/contact"}><h5>Contact</h5></Link>
                    <Link to={process.env.PUBLIC_URL+"/donate"}><h5>Donate</h5></Link>
                </nav>
                <div className="email-form">
                    <h4 className="email-form__title">Newsletter</h4>
                    <h5  className="email-form__description">Sign up now; get closer to our action.</h5>
                    <div className="email-form__form">
                        <input type="email" placeholder="Email  adress..." />
                        <div className="email-form__button icon-arrow-right"></div>
                    </div>
                </div>
            </div>
            <div className="privacy-policy">
                <h5>PodcastTheme by VitaThemes | Privacy policy</h5>
            </div>
            <div className="social-link">
                <a href="" className="icon-facebook"></a>
                <a href="" className="icon-github"></a>
                <a href="" className="icon-twitter"></a>
            </div>
        </footer>
    );
}

export default Footer;