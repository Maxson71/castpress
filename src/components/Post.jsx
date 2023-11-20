import React from "react";
import {Link} from "react-router-dom";
import './styles/Post.css';

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

const Post = (props) => {
    return (
        <Link to={"/"} className="post__item">
            <div>
                <img src={props.img} alt="" className="post__img"/>
                <div className="post__info">
                    <h2 className="post__title">{props.id}{props.title}</h2>
                    <h5 className="post__date">{formatDate(new Date(props.date))}</h5>
                    <h5 className="post__more">Read More</h5>
                </div>
            </div>
        </Link>
    )
}
export default Post;