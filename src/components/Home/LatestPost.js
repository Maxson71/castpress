import {Link} from "react-router-dom";
import React from "react";
import './styles/LatestPost.css';

import latest_post__img_1 from "../../assets/img/blog_image_1.jpg";
import latest_post__img_2 from "../../assets/img/blog_image_2.jpg";

const latest_post_date_1 = new  Date('2023-01-04');
const latest_post_date_2 = new Date('2022-08-15');

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function Post(props) {
    return (
        <Link to={process.env.PUBLIC_URL+"/"} className="latest-posts__item">
            <div>
                <img src={props.img} alt="" className="latest-posts__img"/>
                <div className="latest-posts__info">
                    <h2 className="latest-posts__title">{props.title}</h2>
                    <h5 className="latest-posts__date">{formatDate(props.date)}</h5>
                    <h5 className="latest-posts__more">Read More</h5>
                </div>
            </div>
        </Link>
    );
}


function LatestPost() {
    return (
        <div className="latest-posts">
            <h1 className="latest-posts__title">
                Latest Posts
            </h1>
            <Post
                img={latest_post__img_1}
                title="How to create your own podcast cover art?"
                date={latest_post_date_1}
            />
            <Post
                img={latest_post__img_2}
                title="Everything you need to know about mind mapping creation"
                date={latest_post_date_2}
            />
            <Link to={process.env.PUBLIC_URL+"/blog"} className="blog__button button white_button">
                <div className="button_text">
                    View Blog
                </div>
                <span className="simple-arrow icon-simple-arrow-right"></span>
            </Link>

        </div>
    );
}
export default LatestPost;