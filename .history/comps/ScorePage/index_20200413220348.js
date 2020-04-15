import React from 'react';
import './scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icons from '../Icons';


const ScorePage = () => <div id='score-page'>

        <div><Icons /></div>
        <div id="my_score_container">
            <p class="my_score">My Score</p>
        </div>

        <div id='score-container'>
            <div class='score'></div>
            <div class='score'></div>
            <div class='score'></div>
            <div class='score'></div>
            <div class='score'></div>
            <div class='score'></div>
            <div class='score'></div>
        </div>

        <div id='explanation-container'>
            <p id='explanation'>Progress</p>
        </div>

        <hr class="line"></hr>

        <div id="progress_bar">
            <div class='progress'></div>
        </div>

        <div id=""><GreenButton
            text='Pick another topic'
        /></div>


</div>
 
 ScorePage.defaultProps
export default ScorePage;