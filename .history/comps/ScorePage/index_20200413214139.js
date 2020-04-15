import React from 'react';
import './scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icons from '../Icons';


const ScorePage = () => <div id='score-page'>
        <div><Icons /></div>
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
            <p id='explanation1'>First, pick a global climate change issue that you want to learn more about.</p>
            <p id='explanation2'>Then, learn about the causes, consequences, and discover some ways you can help related to your chosen issue.</p>
            <p id='explanation3'>Afterwards, take a quiz to test your knowledge and win points!</p>
        </div>

</div>
 
 ScorePage.defaultProps
export default ScorePage;