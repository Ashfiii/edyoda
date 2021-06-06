import React from 'react';
import './HomeSection.css'
import img1 from '../../images/tech-javascript.svg';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import img2 from '../../images/tech-reactjs.svg';
import img3 from '../../images/tech-django.svg';
import img4 from '../../images/tech-aws.svg';
import img5 from '../../images/tech-data-analysis.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import avatarImg from '../../images/default-avatar.svg';
import { NavLink } from 'react-router-dom';

const HomeSection = () => {

    const cards = (image, title) => (
        <div className="cards">
            <div className="top-wrapper">
                <div className="wrapperImg">
                    <img src={image} alt="wrapperImage" />
                </div>
                <div className="card-desc">
                    <div className="card-title">{title}</div>
                    <div className="card-options">
                        <img src={avatarImg} alt="Avatar"/>
                        <span>John</span>
                    </div>
                </div>
            </div>
            <div className="bottom-wrapper">
                <div className="card-numbers">
                    <div className="number-block">
                        <div className="numbers">2</div>
                        <p>Weeks</p>
                    </div>
                    <div className="number-block">
                        <div className="numbers">6</div>
                        <p>Assignments</p>
                    </div>
                    <div className="number-block">
                        <div className="numbers">9</div>
                        <p>MCQ Quiz</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const LeftLinearProgress = withStyles(() => ({
        root: {
          height: 8,
          borderRadius: 5,
          width: 193
        },
        colorPrimary: {
            backgroundColor: '#abe1ff',
        },
        bar: {
          backgroundColor: '#0096ff',
        },
      }))(LinearProgress);

      const TopRightLinearProgress = withStyles(() => ({
        root: {
          height: 8,
          borderRadius: 4,
          width: 208
        },
        colorPrimary: {
            backgroundColor: '#a3bfa780',
        },
        bar: {
          backgroundColor: '#08a66c',
        },
      }))(LinearProgress);

      const BottomRightLinearProgress = withStyles(() => ({
        root: {
          height: 8,
          borderRadius: 4,
          width: 208
        },
        colorPrimary: {
            backgroundColor: '#bfa3a380',
        },
        bar: {
          backgroundColor: '#ed4a4c',
        },
      }))(LinearProgress);

    return (
        <div className="homesection">
            <div className="section-wrap">
                <div className="top-sectionwrap">
                    <h1>Continue Learning</h1>
                    <div className="card">
                        <NavLink to="/modules">
                            <div className="card-left">
                                <span>VIEW MODULE DETAILS</span>
                                <div className="card-info">
                                    <div className="card-container">
                                        <div className="card-topcontainer">
                                            <div className="titleImg">
                                                <img src={img1} alt="titleImage" />
                                            </div>
                                            <div className="card-desc">
                                                <div className="card-title"><h3>JAVASCRIPT</h3></div>
                                                <div className="card-options">
                                                    <img src={avatarImg} alt="Avatar"/>
                                                    <span>John Doe</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-bottomcontainer">
                                            <div className="cardoptions-title">
                                                <p>Progress</p>
                                                <p>Live Sessions</p>
                                                <p>Assignments</p>
                                                <p>MCQ Quiz</p>
                                            </div>
                                            <div className="card-progress">
                                                <div className="card-progressbar">
                                                    <p>45%</p>
                                                    <LeftLinearProgress variant="determinate" value={45} />
                                                </div>
                                                <div className="card-progressbar">
                                                    <p>15/35</p>
                                                    <LeftLinearProgress variant="determinate" value={23} />
                                                </div>
                                                <div className="card-progressbar">
                                                    <p>1/4</p>
                                                    <LeftLinearProgress variant="determinate" value={25} />
                                                </div>
                                                <div className="card-progressbar">
                                                    <p>5/6</p>
                                                    <LeftLinearProgress variant="determinate" value={83} />
                                                </div>
                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-plan">
                                    <div className="card-details">
                                        <h3>Today's Plan</h3>
                                        <span>7 February 2021</span>
                                    </div>
                                    <div className="title">JavaScript</div>
                                    <span className="caption">Quiz / Assignment</span>
                                    <span className="plan-details">Opens at 7 pm</span>
                                    <div className="card-button">
                                        <button>JOIN LIVE SESSION</button>
                                        <p>SESSION IN PROGRESS</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </NavLink>
                        <div className="card-right">
                            <h2>Progress Overview</h2>
                            <div className="tiny-card">
                                <div className="tinycard-desc">
                                    <h2>94<span>%</span></h2>
                                    <p>Overall Grade</p>
                                </div>
                                <div className="card-right-progress">
                                    <TopRightLinearProgress variant="determinate" value={94} />
                                </div>
                                
                            </div>
                            <div className="tiny-card">
                                <div className="tinycard-desc">
                                    <h2>32<span>%</span></h2>
                                    <p>Attendance</p>
                                </div>
                                <div className="card-right-progress">
                                    <BottomRightLinearProgress variant="determinate" value={32} />
                                </div>
                                
                            </div>
                            <h3>VIEW DETAILED PROGRESS</h3>
                        </div>
                    </div>
                </div>
                <div className="bottom-section-wrap">
                    <h1>Upcoming Modules</h1>
                    <div className="card-row">
                        {cards(img2, "REACTJS")}
                        {cards(img3, "DJANGO")}
                        {cards(img4, "INTRO TO AWS")}
                        {cards(img5, "DATA ANALYSIS FUNDAMENTALS")}
                    </div>
                </div>
            </div>
            
            <div className="arrow">
                <div className="backward-arrow">
                    <ArrowBackIcon />
                </div>
                <div className="forward-arrow">
                    <ArrowForwardIcon />
                </div>
            </div>
            
        </div>
    )
}

export default HomeSection
