import {Link} from "react-router-dom";
import React from "react";
import './styles/LatestPost.css';
import Post from "./Post";

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