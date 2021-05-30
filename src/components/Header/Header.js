import React from 'react';
import './Header.css';
import notificationImg from '../../images/Notification.svg';
import avatarImg from '../../images/default-avatar.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrap">
                <div className="logo"><h1>EDYODA</h1></div>
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
