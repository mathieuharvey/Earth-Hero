import React from 'react';
import './tutorial.css';
import GreenButton from '../../comps/Green-button';

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
            <p id='explanation2'>Then, learn about the causes, consequences, and discover some ways you can help related to your chosen issue.</p>
        </div>

        <div><GreenButton
        text='Next'
        onClick={SwitchMessage}
        /></div>
</div>

function SwitchMessage(){
    document.querySelector("#explanation1").style.display = 'none';
    document.querySelector("#explanation2").style.display = 'flex';
}
export default Tutorial;