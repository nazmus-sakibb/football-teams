import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFacebook } from '@fortawesome/free-solid-svg-icons'
import Facebook from '../../Icon/Facebook.png';
import Twitter from '../../Icon/Twitter.png';
import Youtube from '../../Icon/YouTube.png';
import './TeamData.css';
import Male from '../../Icon/male.png';
import Female from '../../Icon/female.png';


const TeamData = (props) => {
    const { strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strTeamBanner } = props.teamData;
    
    let isMale;
    if(strGender === "Male"){
        isMale = <img src={Male} alt=""/>
    }
    else{
        isMale = <img src={Female} alt=""/>
    }

    return (
        <div  className="team-data">
            <img src={strTeamBanner} alt=""/>
            <div className="team-data-container">
                <div className="team-info">
                    <h3>{strTeam}</h3>
                    <p>Founded: {intFormedYear}</p>
                    <p>Country: {strCountry}</p>
                    <p>Sport type: Football</p>
                    <p>Gender: {strGender}</p>
                </div>
                <div className="team-data-img">
                    {isMale}
                </div>
            </div>

            <div className="team-description">
                <br />
                <p>{strDescriptionEN}</p>
                <br />
                <div className="social-icons">
                    <a href="https://twitter.com/"><img src={Twitter} alt=""/></a>
                    <a href="https://www.facebook.com/"><img src={Facebook} alt=""/></a>
                    <a href="https://www.youtube.com/"><img src={Youtube} alt=""/></a>
                </div>
            </div>

        </div>
    );
    
};

export default TeamData;