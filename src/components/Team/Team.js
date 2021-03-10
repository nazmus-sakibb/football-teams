import React from 'react';
import { useHistory } from 'react-router-dom';
import './Team.css';

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
            <button onClick={() => handleClick(idTeam)}>Explore</button>
        </div>
    );
};

export default Team;