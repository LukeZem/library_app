import React from 'react'
import "./index.css"
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';

const Sidebar = ({ lightIsOn }) => {
    return (
        <aside id='sidebar'>
            {/* user icon */}
            <LightModeIcon
                className={`${lightIsOn ?
                    "color-yellow" : ""}`}
            />
            <AccountBoxIcon />
            <div>Name: ???</div>
            {/* user name */}
            {/* 4 button for different pages */}
            {/* <Link>
                <button>Login/Create</button>
            </Link> */}
            <Link to="/" >
                <button>Light Switch</button>
            </Link>
            <Link to="/new" >
                <button>New Book</button>
            </Link>
            <Link to="/library" >
                <button>View Books</button>
            </Link>
        </aside>
    )
}

export default Sidebar