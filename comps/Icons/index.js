import React from 'react';
import './icons.css';
import HomePage from '../Home-page';
import Menu from '../Menu';

const iconImg = require('../../images/favicon.png');

const Icons = () => <div>
    <div id='icons'>
        <img id='globe' onClick={ToHome} src={iconImg} />

         {/* <span id='hamburger' className="material-icons">
            menu
            </span> */}
        </div>
        
        <div id='home'><HomePage /></div>

        <div id='menu'><Menu /></div>
</div>


function ToHome(){
    document.querySelector("#home").style.display = 'flex';
}


export default Icons;