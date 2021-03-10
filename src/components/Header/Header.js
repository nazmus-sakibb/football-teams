import React from 'react';
import HeaderBg from '../../Icon/home-bg.jpg'
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="logo-bg">
                <img src={HeaderBg} alt=""/>
            </div>
            <div className="logo">
                <h1>Football Teams</h1>
            </div>
        </div>
    );
};

export default Header;