import './styles/TeamMembers.css';

function Member(props) {
    return (
        <div className="team__member">
            <img className="team__member__img" src={props.image} alt={props.fullname}/>
            <div className="team__member__info">
                <div className="info__more">
                    <h6 className="info__title">{props.position}</h6>
                    <h3 className="info__name">{props.fullname}</h3>
                    <p className="info__description">{props.info}</p>
                    <div className="info__social">
                        <a href={props.linkedin} target="_blank" className="icon-linkedin social__icon" ></a>
                        <a href={props.github} target="_blank" className="icon-github social__icon" ></a>
                        <a href={props.twitter} target="_blank" className="icon-twitter social__icon" ></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Team = (props) => {
    return (
        <div className="team">
            <h1 className="team__title">Team Members</h1>
            <div className="team__members">
                {props.team.map((developer, index) => (
                    <Member
                        key={index}
                        fullname={developer.fullname}
                        position={developer.position}
                        image={developer.img}
                        info={developer.info}
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