import React from 'react';

const TeamData = (props) => {
    const { strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, idTeam } = props.teamData;
    return (
        <div>
            <div>
                <h3>This is Team Detail component: {idTeam}</h3>
                <h3>Name: {strTeam}</h3>
                <p>Founded: {intFormedYear}</p>
                <p>Country: {strCountry}</p>
                <p>Sport type: Football</p>
                <p>Gender: {strGender}</p>
            </div>

            <p>{strDescriptionEN}</p>
        </div>
    );
};

export default TeamData;