import React from 'react';
import './Navbar.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const toggleDropdown = () => {
      document.querySelector('.meta-strip').classList.toggle("show");
      const showBlock = document.querySelector('.meta-strip').classList.contains('show');
      if(showBlock){
        document.querySelector('.downArrow').style.display="none";
        document.querySelector('.upArrow').style.display="block";
        document.querySelector('.progressbar').style.display="none";
        document.querySelector('.navbar-block>p').innerHTML="TEXT-01020";
      }else{
        document.querySelector('.upArrow').style.display="none";
        document.querySelector('.downArrow').style.display="block";
        document.querySelector('.progressbar').style.display="block";
        document.querySelector('.navbar-block>p').innerHTML="TEST-01020";
      }
    }

    const BorderLinearProgress = withStyles(() => ({
      root: {
        height: 8,
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
        <div className="navbar-container">
          <div className="dropdown">
            <div className="navbar-left">
              <div className="navbar-block" onClick={toggleDropdown}>
                <p>TEST-01020</p>
                {location.pathname==="/home" ?
                (<div className="caret">
                  <div className="downArrow">
                    <svg className="downCaret" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.22588 9.15771L0.998642 0.907715L17.4531 0.907715L9.22588 9.15771Z" fill="white" fillOpacity="0.9"/>
                    </svg>
                  </div>
                  <div className="upArrow">
                    <svg className="upCaret" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.22588 9.15771L0.998642 0.907715L17.4531 0.907715L9.22588 9.15771Z" fill="white" fillOpacity="0.9"/>
                    </svg>
                  </div>
                  
                {/* <img className="downArrow" src={dropdownImg} alt="DropdownImage"  />
                <img className="upArrow" src={dropdown1Img} alt="DropdownImage" /> */}
                </div>) : ('')}
              </div>
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
          <div className="meta-strip">
           <div className="wrapper">
             <label>Select Program</label>
             <div className="metastrip-row">
               <label>TEST-010120</label>
               <label>TEXT-020220</label>
               <label>TEXT-020320</label>
             </div>
           </div>
          </div>
        </div>
    )
}

export default Navbar
