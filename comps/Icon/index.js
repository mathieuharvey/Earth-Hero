import React from 'react';
import './icon.css';
import HomePage from '../../pages/Home-page';
import Link from 'next/link';

const iconImg = require('../../images/favicon.png');

const Icon = () => <div>
    <div id='icons'>
        <Link href='/Home-page'><img id='globe' src={iconImg} /></Link>
        </div>
        
        {/* <div id='home'><HomePage /></div> */}

</div>


// function ToHome(){
//     document.querySelector("#home").style.display = 'flex';
// }


export default Icon;