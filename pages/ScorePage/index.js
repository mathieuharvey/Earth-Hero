import React from 'react';
import './Scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icon from '../../comps/Icon';


const ScorePage = () => <div id='score-page'>

        <div><Icon /></div>
        <div id="my_score_container">
            <p class="my_score">My Score</p>
        </div>

        <div id='score-container'>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
        </div>

        <div id='explanation-container'>
            <p id='explanation'>Progress</p>
        </div>

        <hr class="line"></hr>

        <div id="progress_bar">
            <div class='progress'></div>
        </div>

        <div id="topic_button"><GreenButton
            text='Pick another topic'
        /></div>


</div>
 
 ScorePage.defaultProps
export default ScorePage;