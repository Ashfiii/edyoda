import React from 'react';
import './SidebarOption.css';

const SidebarOption = ({imgDark, imgWhite, title, isGray, active, ...props}) => {
    return (
        <div onClick={props.onClick} className={`sidebaroption ${active && "option-selected"}
        ${isGray && "option-selected"}`}>
            <img src={active ? imgDark : imgWhite} alt="SidebarOption" />
            <p>{title}</p>
        </div>
    )
}

export default SidebarOption
