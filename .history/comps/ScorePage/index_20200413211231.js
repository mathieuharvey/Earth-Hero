import React from 'react';
import './scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icons from '../Icons';

const iconImg = require('./favicon.png');

const ScorePage = () => <div id='score-page'>
        {/* <div id='icons'>
        <img id='globe' src={iconImg} />

         <span id='hamburger' className="material-icons">
            menu
            </span>
        </div> */}
        <div><Icons /></div>
        <div id='score-container'>
            <div id='score'></div>
        </div>

        <div id='explanation-container'>
            <p id='explanation1'>First, pick a global climate change issue that you want to learn more about.</p>
            <p id='explanation2'>Then, learn about the causes, consequences, and discover some ways you can help related to your chosen issue.</p>
            <p id='explanation3'>Afterwards, take a quiz to test your knowledge and win points!</p>
        </div>

        <div id='next'><GreenButton
        text='Next'
        onClick={SwitchMessage}
        /></div>

<div id='start'><GreenButton
        text="Okay, let's start!"
        // onClick={SwitchPage}
        /></div>

</div>

var switch_state = false;
function SwitchMessage(){
    if(switch_state === false){
    document.querySelector("#explanation1").style.display = 'none';
    document.querySelector("#explanation2").style.display = 'flex';
    switch_state = true;
    }else if(switch_state === true){
        document.querySelector("#explanation2").style.display = 'none';
        document.querySelector("#explanation3").style.display = 'flex';
        document.querySelector("#next").style.display = 'none';
        document.querySelector("#start").style.display = 'flex';
    }
}
export default ScorePage;