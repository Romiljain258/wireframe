import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar=()=>{
    return(
        <div className="sidebar-p">
    <div className="sidebar">
        <ul>
            <li>
                <Link to="/">
                    <span className="title">EATORAMA</span>
                </Link>
            </li>
            <li>
                <Link to="/star">
                    <span className="title">Soup Station</span>
                </Link>
            </li>
            <li>
                <Link to="/soup">
                    <span className="title">StarBucks</span>
                </Link>
            </li>
        </ul>
    </div>
    </div>
    )
}
export default Sidebar;