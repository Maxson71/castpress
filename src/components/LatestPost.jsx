import {Link} from "react-router-dom";
import React from "react";
import './styles/LatestPost.css';

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
                    <h5 className="latest-posts__date">{formatDate(new Date(props.date))}</h5>
                    <h5 className="latest-posts__more">Read More</h5>
                </div>
            </div>
        </Link>
    );
}


const LatestPost = (props) => {
    return (
        <div className="latest-posts">
            <h1 className="latest-posts__title">
                Latest Posts
            </h1>
            {props.blogs.slice(1, 3).map((blog, index) => (
                <Post
                    key={index}
                    img={blog.img}
                    title={blog.title}
                    date={blog.date}
                />
            ))
            }
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