import React from 'react';
import './tutorial.css';
import GreenButton from '../../comps/Green-button';
import Icon from '../../comps/Icon';
// import ChooseCategory from '../../comps/Choose-Category';
import Menu from '../../comps/Menu';
import Link from 'next/Link';

const iconImg = require('./favicon.png');

const Tutorial = () => <div id='tutorial-page'>
    <div id='tutorial-subdiv'>
        
        <div><Icon /></div>
        <div id='tutorial-container'>
            <div id='tutorial'></div>
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

{/* <div id='start'><GreenButton
        text="Okay, let's start!"
        onClick={SkipTutorial}
        /></div> */}

        <div id='center'><Link href='/Choose-Category'><div className='green-button' id='start'>Okay, let's go!</div></Link></div>


        {/* <div onClick={SkipTutorial} id='skip'>Skip Tutorial</div> */}

        <div id='skip'><Link href='/Choose-Category'><div>Skip Tutorial</div></Link></div>
        
        </div>
        
        <div><Menu /></div>
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

// function SkipTutorial(){
//     document.querySelector("#tutorial-subdiv").style.display = 'none';
//     document.querySelector("#category-page").style.display = 'block';
// }
export default Tutorial;