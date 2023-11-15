import './styles/About.css';
const About = () => {
    return (
        <main className="about-page page border">
            <h1 className="about__title">
                About
            </h1>
            <div className="about__content">
                <h2 className="content__title">
                    What, when and how?
                </h2>
                <p className="content__text">
                    Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. Curabitur ultricies ex ante, eu placerat ipsum hendrerit ut. Maecenas ornare tellus id consequat mollis. Aenean urna risus, dignissim non cursus nec, volutpat hendrerit libero.
                </p>
            </div>
            <div className="about__content">
                <h2 className="content__title">
                    Security
                </h2>
                <p className="content__text">
                    Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et.
                </p>
            </div>
            <div className="about__content">
                <h2 className="content__title">
                    Cookies
                </h2>
                <ul className="content__list">
                    <li className="list__item">
                        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies .placerat et ac neque. Proin risus eros.
                    </li>
                    <li className="list__item">
                        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies .placerat et ac neque. Proin risus eros.
                    </li>
                </ul>
            </div>

        </main>
    )
}
export default About;