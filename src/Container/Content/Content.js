import React from 'react';
import './Content.css';
import Dashboard from './Dashboard/Dashboard';



import Sidebar from './Sidebar/Sidebar';


const Content = () => {
    return (
        <div className="Content">
            <Sidebar />
            <Dashboard />
        </div>
    )
}

export default Content;