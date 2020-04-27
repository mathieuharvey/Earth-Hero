import React from 'react';
import './menu.css';
import Link from 'next/link';

const Hamburger = require('./hamburger.svg');

const Menu = () => <div>

<img id='hamburger' onClick={MenuToggle} src={Hamburger} />
{/* <span id='hamburger' onClick={MenuToggle} className="material-icons">
        menu
    </span> */}
 <div id='menu'>
    <div id='x-div'>
        
    <div id='close-container'>
        <span id='close' onClick={MenuToggle} className="material-icons">
            close
        </span>
    </div>

</div>
    <div id='menu-content'>
        <div id='link'>
        <Link href='/Home-page'><span id='nav-icons' className="material-icons">
            home
            </span></Link>
            <Link href='/Home-page'><p id='link-text'>Home</p></Link>
        </div>


        <div id='link'>
        <Link href='/ScorePage'><span id='nav-icons' className="material-icons">
                assignment
                </span></Link>
                <Link href='/ScorePage'><p id='link-text'>My Score</p></Link>
            </div>


        <div id='help-link'>
        <Link href='/Tutorial'><span id='help' className="material-icons">
                help_outline
                </span></Link>
                <Link href='/Tutorial'><p id='help-text'>Help</p></Link>
            </div>

    </div>
</div>

<div id='gray' onClick={CloseMenu}></div>

</div>

//functions
var menu_state = false;

function MenuToggle(){
    if(menu_state === false){
        OpenMenu();
    } else {
        CloseMenu(); 
    }
}

function OpenMenu(){
    document.querySelector("#menu").style.right = "0";
    document.querySelector("#hamburger").style.opacity = '0';
    document.querySelector("#gray").style.display = 'block';
    document.querySelector("#gray").style.backgroundColor = 'rgba(180,180,180,0.5)';

    setTimeout(function(){
        // document.querySelector("#menu").style.opacity = 1;
    }, 100);
    
    menu_state = true;
}

function CloseMenu(){
    setTimeout(function(){
        
        document.querySelector("#hamburger").style.display = 'flex';
        document.querySelector("#hamburger").style.opacity = 1;
        
    }, 400);
    document.querySelector("#menu").style.right = "-65vw";
    document.querySelector("#gray").style.display = 'none';

    // document.querySelector("#menu").style.opacity = 0;
    menu_state = false;
}

export default Menu;