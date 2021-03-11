import React from 'react';
import { useHistory } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const {strTeam, strTeamBadge, idTeam} = props.team;
    const history = useHistory();
    const handleClick = (idTeam) => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }
    return (
        <div className="team-container">
            <img src={strTeamBadge} alt=""/>
            <h3>{strTeam}</h3>
            <p>Sports type: Football</p>
            <button onClick={() => handleClick(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Team;