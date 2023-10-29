import React from "react";
import './styles/Team.css';

import christian_buehner from "../../assets/img/christian-buehner.jpg";
import dmitry_vechorko from "../../assets/img/dmitry-vechorko.jpg";
function Team() {

    function Member(props) {
        return (
            <div className="team__member">
                <img className="team__member__img" src={props.image} alt={props.name}/>
                <div className="team__member__info">
                    <div className="team__member__more">
                        <h6 className="team__member__title">Position</h6>
                        <h3 className="team__member__name">{props.name}</h3>
                    </div>
                    <div className="team__member__social">
                        <a href={props.linkedin} className="icon-linkedin team__member__social__icon" ></a>
                        <a href={props.github} className="icon-github team__member__social__icon" ></a>
                        <a href={props.twitter} className="icon-twitter team__member__social__icon" ></a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="team">
            <h1 className="team__title">Team</h1>
            <div className="team__members">
                <Member
                    name = "Aida Cave"
                    image = {dmitry_vechorko}
                    linkedin = "https://www.linkedin.com/in/aida-cave/"
                    github = ""
                    twitter = ""
                />
                <Member
                    name = "Nick Carleton"
                    image = {christian_buehner}
                    linkedin = "https://www.linkedin.com/in/aida-cave/"
                    github = ""
                    twitter = ""
                />
            </div>
        </div>
    );
}

export default Team;