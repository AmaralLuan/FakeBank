import React from 'react';
import './User-profile.css';

import userImg from './user.jpg';


const userProfile = () => {
    return (
        <div className="User-profile">

            <img src={userImg} alt="user"></img>
            <span>José das Quantas</span>
        </div>
    )
}


export default userProfile;