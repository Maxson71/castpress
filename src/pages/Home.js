import React from 'react';
import '../styles/Home.css';
import AudioPlayer from "../components/AudioPlayer";

const latest_post__img_1 = `${process.env.PUBLIC_URL}./img/blog_image_1.jpg`
const latest_post__img_2 = `${process.env.PUBLIC_URL}./img/blog_image_2.jpg`
const latest_post_date_1 = new  Date('2023-01-04');
const latest_post_date_2 = new Date('2022-08-15');
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function Home() {
    return (
        <main className="home-page border">
            <AudioPlayer/>
            <div className="latest-posts">
                <h1 className="latest-posts__title">
                    Latest Posts
                </h1>
                <a href={process.env.PUBLIC_URL+"/"} className="latest-posts__item">
                    <div>
                        <img src={latest_post__img_1} alt="" className="latest-posts__img"/>
                        <div className="latest-posts__info">
                            <h2 className="latest-posts__title">How to create your own podcast cover art?</h2>
                            <h5 className="latest-posts__date">{formatDate(latest_post_date_1)}</h5>
                            <h5 className="latest-posts__more">Read More</h5>
                        </div>
                    </div>
                </a>
                <a href={process.env.PUBLIC_URL+"/blog"}  className="latest-posts__item">
                    <div>
                        <img src={latest_post__img_2} alt="" className="latest-posts__img"/>
                        <div className="latest-posts__info">
                            <h2 className="latest-posts__title">How to create your own podcast cover art?</h2>
                            <h5 className="latest-posts__date">{formatDate(latest_post_date_2)}</h5>
                            <h5 className="latest-posts__more">Read More</h5>
                        </div>
                    </div>
                </a>
                <a href={process.env.PUBLIC_URL+"/blog"} className="blog__button">
                    <h5>
                        View Blog
                    </h5>
                    <span className=" icon-simple-arrow-right"></span>
                </a>

            </div>
        </main>
    );
}

export default Home;