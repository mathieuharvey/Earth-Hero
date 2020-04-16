import React from 'react';
import './menu.css';

const Menu = () => <div>

<span id='hamburger' onClick={MenuToggle} className="material-icons">
        menu
    </span>
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
        <span id='nav-icons' className="material-icons">
            home
            </span>
            <p id='link-text'>Home</p>
        </div>


        <div id='link'>
            <span id='nav-icons' className="material-icons">
                assignment
                </span>
                <p id='link-text'>My Score</p>
            </div>


        <div id='help-link'>
            <span id='help' className="material-icons">
                help_outline
                </span>
                <p id='help-text'>Help</p>
            </div>

    </div>
</div>


<div id='app' onClick={CloseMenu}></div>
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
    document.querySelector("body").style.backgroundColor = 'rgba(180,180,180,0.5)';

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
    document.querySelector("body").style.backgroundColor = 'transparent';

    // document.querySelector("#menu").style.opacity = 0;
    menu_state = false;
}

export default Menu;