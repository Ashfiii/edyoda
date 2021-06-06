import React from 'react';
import './Header.css';
import notificationImg from '../../images/Notification.svg';
import avatarImg from '../../images/default-avatar.svg';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrap">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="options">
                    <img src={notificationImg} alt="Notification" />
                    <span>Hi Jane Doe!</span>
                    <img src={avatarImg} alt="Avatar"/>
                </div>
            </div>
            
        </div>
    )
}

export default Header
