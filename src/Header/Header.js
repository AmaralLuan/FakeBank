import React from 'react';
import './Header.css';


import Usermenu from './UserMenu/User-menu'

const header = () => {
    return (
        <div className="Header">
            <div className="Header__title-box">
                <h1 className="Header__title">Fake Bank</h1>
            </div>
            
            <Usermenu />
        </div>
    )
}

export default header;