import React from 'react';
import './InstructorSection.css';
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

    const instructorRow = (name, course1, course2, course3) => (
        <div className="instructorrow">
            <div className="instructor-block">
                <img src={avatarImg} alt="ModuleTitleImage"/>
                <h3>{name}</h3>
            </div>
            <div className="instructor-options">
                <p>{course1}</p>
                <p>{course2}</p>
                <p>{course3}</p>
            </div>
        </div>
    )

    const techRow = (img, title) => (
        <div className="row-tech">
            <img src={img} alt="CourseImage" />
            <p>{title}</p>
        </div>
    )
    
    return (
        <div className="instructorsection">
            <div className="sidebar-instructor">
                <h2>Instructors</h2>
                {instructorRow("John Doe", "HTML5", "CSS3", "JAVASCRIPT")}
                {instructorRow("Daphne Doe", "PYTHON", "DATA STRUCTURES & ALGORITHMS", "")}
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
                                {techRow(htmlImg, "HTML5")}
                                {techRow(cssImg, "CSS3")}
                                {techRow(jsImg, "JavaScript")}
                                {techRow(reactImg, "ReactJS")}
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
