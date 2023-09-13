import React, { useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import "./index.css";

const LightSwitch = ({ lightIsOn, setLightIsOn }) => {

    return (
        <div className='page-container'>
            <LightModeIcon className={`light-icon  
            ${lightIsOn ? "color-yellow" : ""}`} />
            {/* text */}
            <button onClick={() => setLightIsOn(!lightIsOn)}>Change The Light!</button>
            {/* button to change the icon */}
        </div>
    )
}

export default LightSwitch