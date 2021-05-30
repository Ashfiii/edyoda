import React from 'react';
import './ModuleSection.css';
import htmlImg from '../../images/tech-html.svg';
import cssImg from '../../images/tech-css.svg';
import jsImg from '../../images/tech-javascript.svg';
import reactImg from '../../images/tech-reactjs.svg';
import dsaImg from '../../images/tech-dsa.svg';
import ModuleTitleRow from './../ModuleTitleRow/ModuleTitleRow';

const ModuleSection = () => {
    return (
        <div className="modulesection">
            <div className="sidebar-module">
                <h2>Modules</h2>
                <ModuleTitleRow img={htmlImg} title="HTML5"/>
                <ModuleTitleRow img={cssImg} title="CSS3"/>
                <ModuleTitleRow img={jsImg} title="JavaScript"/>
                <ModuleTitleRow img={reactImg} title="ReactJS"/>
                <ModuleTitleRow img={dsaImg} title="Data Structures &amp; Algorithms"/>
            </div>
            <div className="contents-module">
                <div className="top-container">
                    <h2>JavaScript</h2>
                    <p>7 February 2021, Monday</p>
                </div>
                <div className="bottom-container">
                    <h3>Session Plan</h3>
                    <p>1. Introduction to JavaScript;</p>
                    <p>2. Language Basics: Variables, Data Types - Primitive and Reference,</p>
                    <p>3. Number(Add, Sub, Mul, NaN, Infinity), Inbuilt Functions - Numbers;</p>
                    <p>4. Dialogs: Alert, Confirm, Input;</p>
                    <p>5. Control Flow</p>
                </div>

            </div>
            
            
        </div>
    )
}

export default ModuleSection
