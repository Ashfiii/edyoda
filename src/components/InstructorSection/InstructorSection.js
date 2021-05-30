import React from 'react';
import './InstructorSection.css';
import InstructorRow from './../InstructorRow/InstructorRow';
import avatarImg from '../../images/default-avatar.svg';
import linkedinImg from '../../images/linkedin.svg';
import websiteImg from '../../images/website.svg';
import githubImg from '../../images/github.svg';
import introVideoImg from '../../images/intro-video-placeholder.jpg';
import htmlImg from '../../images/tech-html.svg';
import cssImg from '../../images/tech-css.svg';
import jsImg from '../../images/tech-javascript.svg';
import reactImg from '../../images/tech-reactjs.svg';

const InstructorSection = () => {
    return (
        <div className="instructorsection">
            <div className="sidebar-instructor">
                <h2>Instructors</h2>
                <InstructorRow name="John Doe" course1="HTML5" course2="CSS3" course3="JAVASCRIPT"/>
                <InstructorRow name="Daphne Doe" course1="PYTHON" course2="DATA STRUCTURES &amp; ALGORITHMS" course3=""/>
            </div>
            <div className="contents-instructor">
                <div className="inner-block">
                    <div className="title-row">
                        <div className="imgContainer">
                            <img src={avatarImg} alt="Avatar" />
                            <div className="links">
                                <img src={linkedinImg} alt="Social Links" /> 
                                <img src={websiteImg} alt="Social Links" /> 
                                <img src={githubImg} alt="Social Links" /> 
                            </div>
                        </div>
                        <p>John Doe</p>
                        <img src={introVideoImg} alt="Intro Video" />
                    </div>
                    <div className="content-row">
                        <div className="row1">
                            <div className="row-title">
                                <h3>STATS</h3>
                            </div>
                            <div className="row-info">
                                <div className="row-block">
                                    <h1>1320</h1>
                                    <p>Total Hours Taught</p>
                                </div>
                                <div className="row-block">
                                    <h1>468</h1>
                                    <p>Students Taught</p>
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="row2-title">
                                <h3>TECHNICAL EXPERTISE</h3>
                            </div>
                            <div className="row-desc">
                                <div className="row-tech">
                                    <img src={htmlImg} alt="HTML5" />
                                    <p>HTML5</p>
                                </div>
                                <div className="row-tech">
                                    <img src={cssImg} alt="CSS3" />
                                    <p>CSS3</p>
                                </div>
                                <div className="row-tech">
                                    <img src={jsImg} alt="JavaScript" />
                                    <p>JavaScript</p>
                                </div>
                                <div className="row-tech">
                                    <img src={reactImg} alt="ReactJS" />
                                    <p>ReactJS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about">
                        <div className="row1">
                            <h3>TAGLINE</h3>
                            <p>“Everything you want is outside of your comfort zone.”</p>
                        </div>
                        <div className="row2">
                            <h3>ABOUT</h3>
                            <p>“John is a Computer Science graduate. He has been part of the corporate circle since his college days. In his early days, he was part of a startup team delivering production grid android apps. Currently, he is a lead developer at www.edyoda.com. He is responsible for the entire front-end development &amp; integration with the back-end. React, Python, Django are his areas of expertise. He has been delivering corporate training for Android, React, Javascript, Python &amp; Django. ”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorSection
