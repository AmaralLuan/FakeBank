import React from 'react';
import './Card.css';

import wallet from './Icons/wallet.png';

const Card = (props) => {
    return (
        <div className="Card">
            <img src={wallet} alt="carteira"></img>
            <h4 className="Card__title">{props.title}</h4>

            <h3 className="Card__value">R${props.value}</h3>
        </div>
    )
}

export default Card;