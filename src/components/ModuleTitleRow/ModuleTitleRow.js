import React from 'react';
import './ModuleTitleRow.css';

const ModuleTitleRow = ({img, title}) => {
    return (
        <div className="moduletitlerow">
            <img src={img} alt="ModuleTitleImage"/>
            <h3>{title}</h3>
        </div>
    )
}

export default ModuleTitleRow
