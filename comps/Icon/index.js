import React from 'react';
import './icon.css';
import HomePage from '../Home-page';

const iconImg = require('../../images/favicon.png');

const Icon = () => <div>
    <div id='icons'>
        <img id='globe' onClick={ToHome} src={iconImg} />

        </div>
        
        <div id='home'><HomePage /></div>

</div>


function ToHome(){
    document.querySelector("#home").style.display = 'flex';
}


export default Icon;