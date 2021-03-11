import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './TeamData.css';
import Male from '../../Icon/male.png';
import Female from '../../Icon/female.png';
import Flag from '../../Icon/flag.png';
import Football from '../../Icon/football.png';
import Found from '../../Icon/found.png';
import Gender from '../../Icon/gender.png';


const TeamData = (props) => {
    const { strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strTeamBanner, strFacebook, strTwitter, strYoutube, strSport } = props.teamData;
    
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
                    <p><img src={Found} alt=""/> Founded: {intFormedYear}</p>
                    <p><img src={Flag} alt=""/> Country: {strCountry}</p>
                    <p><img src={Football} alt=""/> Sport type: {strSport}</p>
                    <p><img src={Gender} alt=""/> Gender: {strGender}</p>
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
                    <a href={`https://${strTwitter}`} target="_blank"><FontAwesomeIcon className="font-icon twitter" icon={faTwitter}/></a>
                    <a href={`https://${strFacebook}`} target="_blank"><FontAwesomeIcon className="font-icon" icon={faFacebook}/></a>
                    <a href={`https://${strYoutube}`} target="_blank"><FontAwesomeIcon className="font-icon youtube" icon={faYoutube}/></a>
                </div>
            </div>

        </div>
    );
    
};

export default TeamData;