import React from "react";
import './styles/Team.css';

function Developer(props) {
    return (
        <div className="team__developer">
            <img className="developer__img" src={props.image} alt={props.fullname}/>
            <div className="developer__info">
                <div className="info__more">
                    <h6 className="info__title">{props.position}</h6>
                    <h3 className="info__name">{props.fullname}</h3>
                </div>
                <div className="info__social">
                    <a href={props.linkedin} target="_blank" className="icon-linkedin social__icon" ></a>
                    <a href={props.github} target="_blank" className="icon-github social__icon" ></a>
                    <a href={props.twitter} target="_blank" className="icon-twitter social__icon" ></a>
                </div>
            </div>
        </div>
    );
}

const Team = (props) => {
    return (
        <div className="team">
            <h1 className="team__title">Team</h1>
            <div className="team__developers">
                {props.team.map((developer, index) => (
                    <Developer
                        key={index}
                        fullname={developer.fullname}
                        position={developer.position}
                        image={developer.img}
                        linkedin={developer.linkedin}
                        github={developer.github}
                        twitter={developer.twitter}
                    />
                ))
                }
            </div>
        </div>
    );
}

export default Team;