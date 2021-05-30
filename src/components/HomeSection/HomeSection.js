import React from 'react';
import './HomeSection.css'
import img1 from '../../images/tech-javascript.svg';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import img2 from '../../images/tech-reactjs.svg';
import img3 from '../../images/tech-django.svg';
import img4 from '../../images/tech-aws.svg';
import img5 from '../../images/tech-data-analysis.svg';
import Cards from '../Cards/Cards';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import avatarImg from '../../images/default-avatar.svg';

const HomeSection = () => {

    const LeftLinearProgress = withStyles(() => ({
        root: {
          height: 8,
          borderRadius: 5,
          width: 150
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
          height: 10,
          borderRadius: 5,
          width: 240
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
          height: 10,
          borderRadius: 5,
          width: 240
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
            <div className="top-sectionwrap">
                <h1>Continue Learning</h1>
                <div className="card">
                    <div className="card-left">
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
                                <p>Today's Plan</p>
                                <span>7 February 2021</span>
                            </div>
                            <div className="title">JavaScript</div>
                            <span className="caption">Quiz / Assignment</span>
                            <span className="plan-details"><i>Opens at 7 pm</i></span>
                            <div className="card-button">
                                <button>JOIN LIVE SESSION</button>
                                <p>SESSION IN PROGRESS</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card-right">
                        <h2>Progress Overview</h2>
                        <div className="tiny-card">
                            <div className="tinycard-desc">
                                <h2>94%</h2>
                                <p>Overall Grade</p>
                            </div>
                            <TopRightLinearProgress variant="determinate" value={94} />
                        </div>
                        <div className="tiny-card">
                            <div className="tinycard-desc">
                                <h2>32%</h2>
                                <p>Attendance</p>
                            </div>
                            <BottomRightLinearProgress variant="determinate" value={32} />
                        </div>
                        <h3>VIEW DETAILED PROGRESS</h3>
                    </div>
                </div>
            </div>
            <div className="bottom-section-wrap">
                <h1>Upcoming Modules</h1>
                <div className="card-row">
                    <Cards image={img2} title="REACTJS"/>
                    <Cards image={img3} title="DJANGO"/>
                    <Cards image={img4} title="INTRO TO AWS"/>
                    <Cards image={img5} title="DATA ANALYSIS FUNDAMENTALS"/>
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
