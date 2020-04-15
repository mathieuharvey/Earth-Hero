import React from 'react';
import './scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icons from '../Icons';


const ScorePage = () => <div id='score-page'>
        <div><Icons /></div>
        <div id="my_score">
            <p className>My Score</p>
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

</div>
 
 ScorePage.defaultProps
export default ScorePage;