import React from 'react';
import './Team.css';

const Team = (props) => {
    const {strTeam} = props.team;
    return (
        <div className="team-container">
            <h3>{strTeam}</h3>
            <p>Sports type: Football</p>
        </div>
    );
};

export default Team;