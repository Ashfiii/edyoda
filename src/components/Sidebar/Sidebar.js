import React, {useState} from 'react';
import './Sidebar.css';
import SidebarOption from './../SidebarOption/SidebarOption';
import homeDark from '../../images/home-dark.svg';
import homeWhite from '../../images/home-white.svg';
import modulesDark from '../../images/modules-dark.svg';
import instructorWhite from '../../images/instructors-white.svg';
import instructorDark from '../../images/instructors-dark.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState('home');
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <Link to="/">
                    <SidebarOption onClick={(e) => setActiveLink("home")} 
                    active={activeLink === "home"}
                    imgDark={homeDark} 
                    imgWhite={homeWhite} 
                    title="HOME"/>
                </Link>
                <Link to="/modules">
                    <SidebarOption onClick={(e) => setActiveLink("modules")} 
                    active={activeLink === "modules"}
                    imgDark={modulesDark} 
                    title="MODULES"/>
                </Link>
                <Link to="/instructors">
                    <SidebarOption onClick={(e) => setActiveLink("instructor")} 
                    active={activeLink === "instructor"} 
                    imgWhite={instructorWhite} 
                    imgDark={instructorDark}
                    title="INSTRUCTOR"/>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Sidebar
