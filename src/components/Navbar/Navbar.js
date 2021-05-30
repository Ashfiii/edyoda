import React from 'react';
import './Navbar.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import dropdownImg from '../../images/dropdown-icon-white.svg';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const BorderLinearProgress = withStyles((theme) => ({
      root: {
        height: 10,
        borderRadius: 5,
        width: 250
      },
      colorPrimary: {
        backgroundColor: '#abe1ff',
      },
      bar: {
        borderRadius: 5,
        backgroundColor: '#0096ff',
      },
    }))(LinearProgress);   
      
    return (
        <div className="navbar">
            <div className="navbar-left">
                <p>TEST-01020</p>
                <img src={dropdownImg} alt="DropdownImage" />
                <h2>Full Stack Developer Program</h2>
            </div>
            <div className="navbar-right">
              {location.pathname==="/modules" ? (
                <div className="navbardesc">
                    <p>BEGINS IN 12 MINS</p>
                    <button>JOIN SESSION</button>
                    </div>
              ) : (
                <div className="progressbar">
                  <p>38%</p>
                  <BorderLinearProgress variant="determinate" value={38} />
                </div>
              )}
            </div>
        </div>
    )
}

export default Navbar
