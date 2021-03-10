import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFacebook } from '@fortawesome/free-solid-svg-icons'
import Facebook from '../../Icon/Facebook.png';
import Twitter from '../../Icon/Twitter.png';
import Youtube from '../../Icon/YouTube.png';
import './TeamData.css';

const TeamData = (props) => {
    const { strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strTeamBanner } = props.teamData;
    return (
        <div  className="team-data">
            <div>
                <img src={strTeamBanner} alt=""/>
                <h3>{strTeam}</h3>
                <p>Founded: {intFormedYear}</p>
                <p>Country: {strCountry}</p>
                <p>Sport type: Football</p>
                <p>Gender: {strGender}</p>
            </div>

            <p>{strDescriptionEN}</p>
            <br />
            <div className="social-icons">
                <a href="https://twitter.com/"><img src={Twitter} alt=""/></a>
                <a href="https://www.facebook.com/"><img src={Facebook} alt=""/></a>
                <a href="https://www.youtube.com/"><img src={Youtube} alt=""/></a>
            </div>
        </div>
    );
};

export default TeamData;