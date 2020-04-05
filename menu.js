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
        document.querySelector("#menu").style.opacity = 1;
    }, 100);
    
    menu_state = true;
}

function CloseMenu(){
    setTimeout(function(){
        
        document.querySelector("#hamburger").style.display = 'flex';
        document.querySelector("#hamburger").style.opacity = 1;
        
    }, 400);
    document.querySelector("#menu").style.right = "-55vw";
    document.querySelector("body").style.backgroundColor = 'transparent';

    document.querySelector("#menu").style.opacity = 0;
    menu_state = false;
}