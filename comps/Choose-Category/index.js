import React from 'react';
import './choose-category.css';
import Icons from '../../comps/Icons';

const GlobalWarmingImg = require('./globalwarming.png');
const PollutionImg = require('./pollution.png');

const ChooseCategory = () => <div id='choose-category'>
    <div><Icons /></div>
    <div id='text-container'>
        <p id='text'>Choose an environmental problem you want to learn about.</p>
    </div>
    <div id='globalwarming-icon'>
        <img id='globalwarming' onClick={GlobalWarmingSelected} src={GlobalWarmingImg} />
    </div>

    <p id='globalwarming-title'>Global Warming</p>

    <div id='pollution-icon'>
        <img id='pollution'  onClick={PollutionSelected} src={PollutionImg} />
    </div>

    <p id='pollution-title'>Pollution</p>

    <div id='Button-text'>
        <div id='button'>Next</div>
    </div>

</div>


var pollution_state = false;
var globalwarming_state = false;
function GlobalWarmingSelected(){
    if(globalwarming_state === false){
        document.querySelector("#globalwarming").style.height = '18vh';
        document.querySelector("#globalwarming").style.border = '5px solid #46c75f';
        document.querySelector("#pollution").style.height = '15vh';
        document.querySelector("#pollution").style.border = 'none';
        document.querySelector("#button").style.backgroundColor = '#46c75f';
        globalwarming_state = true;
    }else if(pollution_state === true){
        document.querySelector("#globalwarming").style.height = '18vh';
        document.querySelector("#globalwarming").style.border = '5px solid #46c75f';
        document.querySelector("#pollution").style.height = '15vh';
        document.querySelector("#pollution").style.border = 'none';
        pollution_state = false;
    }
}

function PollutionSelected(){
    if(pollution_state === false){
    document.querySelector("#pollution").style.height = '18vh';
    document.querySelector("#pollution").style.border = '5px solid #46c75f';
    document.querySelector("#globalwarming").style.height = '15vh';
    document.querySelector("#globalwarming").style.border = 'none';
    document.querySelector("#button").style.backgroundColor = '#46c75f';
    pollution_state = true;
    }else if(globalwarming_state === true){
    document.querySelector("#pollution").style.height = '18vh';
    document.querySelector("#pollution").style.border = '5px solid #46c75f';
    document.querySelector("#globalwarming").style.height = '15vh';
    document.querySelector("#globalwarming").style.border = 'none';
    globalwarming_state = false;
    }
}
// var pollution_state = false;
// var globalwarming_state = false;
// function GlobalWarmingSelection(){
//     if(globalwarming_state === false){
//         document.querySelector("#globalwarming").style.height = '18vh';
//         document.querySelector("#globalwarming").style.border = '5px solid #46c75f';
//         document.querySelector("#pollution").style.height = '15vh';
//         document.querySelector("#pollution").style.border = 'none';
//         globalwarming_state === true;
//     }else if(globalwarming_state === true){
//         document.querySelector("#pollution").style.height = '18vh';
//         document.querySelector("#pollution").style.border = '5px solid #46c75f';
//         document.querySelector("#globalwarming").style.height = '15vh';
//         document.querySelector("#globalwarming").style.border = 'none';
//         globalwarming_state === false;
//     }
// }
export default ChooseCategory;