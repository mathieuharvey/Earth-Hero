import React from 'react';
import './button.css';

var nextIcon = require("../../images/Icon awesome-arrow-right.svg");
const CardButton = ({button}) => 
    <div id='card-button'>
        <div>{button}</div>
        <img id="next-icon" src={nextIcon}/>
    </div>

export default CardButton;