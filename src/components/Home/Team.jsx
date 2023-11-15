import React from "react";
import './styles/Team.css';

function Member(props) {
    return (
        <div className="team__member">
            <img className="team__member__img" src={props.image} alt={props.fullname}/>
            <div className="team__member__info">
                <div className="team__member__more">
                    <h6 className="team__member__title">{props.position}</h6>
                    <h3 className="team__member__name">{props.fullname}</h3>
                </div>
                <div className="team__member__social">
                    <a href={props.linkedin} target="_blank" className="icon-linkedin team__member__social__icon" ></a>
                    <a href={props.github} target="_blank" className="icon-github team__member__social__icon" ></a>
                    <a href={props.twitter} target="_blank" className="icon-twitter team__member__social__icon" ></a>
                </div>
            </div>
        </div>
    );
}

const Team = (props) => {
    return (
        <div className="team">
            <h1 className="team__title">Team</h1>
            <div className="team__members">
                {props.team.map((developer, index) => (
                    <Member
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