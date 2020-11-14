import React from 'react';
import './Sidebar.css';

import House from './Icons/home.png';
import Card from './Icons/credit-card.png';
import Tools from './Icons/tools.png';

const Sidebar = () => {
    return (
        <div className="Sidebar">            

            <ul className="Sidebar__nav">
                <li className="Sidebar__nav-item">
                    <img src={House} alt="Homepage"/>
                    <span>Início</span>
                </li>

                <li className="Sidebar__nav-item">
                    <img src={Card} alt="Cartão"/>
                    <span>Cartão</span>
                </li>

                <li className="Sidebar__nav-item">
                    <img src={House} alt="Minha conta"/>
                    <span>Minha Conta</span>
                </li>

                <li className="Sidebar__nav-item">
                    <img src={Tools} alt="Homepage"/>
                    <span>Configurações</span>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar;