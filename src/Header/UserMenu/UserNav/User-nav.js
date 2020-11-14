import React from 'react';
import './User-nav.css';

import chat from './chat.png';
import globe from './globe.png';

const userNav = () => {
    return (
        <div className="User-nav">
            <div className="User-nav__notificationBox">
                <img src={chat} alt="conversation"></img>
                <span>5</span>
            </div>

            <div className="User-nav__notificationBox">
                <img src={globe} alt="notification"></img>
                <span>9</span>
            </div>

        </div>
    )
}

export default userNav;