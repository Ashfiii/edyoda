import React from 'react';
import './ModuleSection.css';
import htmlImg from '../../images/tech-html.svg';
import cssImg from '../../images/tech-css.svg';
import jsImg from '../../images/tech-javascript.svg';
import reactImg from '../../images/tech-reactjs.svg';
import dsaImg from '../../images/tech-dsa.svg';

const ModuleSection = () => {

    const moduleTitleRow = (img, title) =>  (
        <div className="moduletitlerow">
            <img src={img} alt="ModuleTitleImage"/>
            <h3>{title}</h3>
        </div>
    )

    return (
        <div className="modulesection">
            <div className="sidebar-module">
                <h2>Modules</h2>
                {moduleTitleRow(htmlImg, "HTML5")}
                {moduleTitleRow(cssImg, "CSS3")}
                {moduleTitleRow(jsImg, "JavaScript")}
                {moduleTitleRow(reactImg, "ReactJS")}
                {moduleTitleRow(dsaImg, "Data Structures & Algorithms")}
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
