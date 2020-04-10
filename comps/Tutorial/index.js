import React from 'react';
import './tutorial.css';

const iconImg = require('./favicon.png');

const Tutorial = () => <div id='tutorial-page'>
        <div id='icons'>
        <img id='globe' src={iconImg} />

         <span id='hamburger' className="material-icons">
            menu
            </span>
        </div>
        <div id='tutorial-container'>
            <div id='tutorial'></div>
        </div>

        <div id='explanation-container'>
            <p id='explanation1'>First, pick a global climate change issue that you want to learn more about.</p>
        </div>
</div>

export default Tutorial;