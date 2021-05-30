import React from 'react';
import './InstructorRow.css';
import avatarImg from '../../images/default-avatar.svg'

const InstructorRow = ({name, course1, course2, course3}) => {
    return (
        <div className="instructorrow">
            <img src={avatarImg} alt="ModuleTitleImage"/>
            <div className="instructor-options">
                <h3>{name}</h3>
                <p>{course1}</p>
                <p>{course2}</p>
                <p>{course3}</p>
            </div>
           
        </div>
    )
}

export default InstructorRow
