import React from 'react';
import './Scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';



const ScorePage = () => <div id='score-page'>

{/* logo & title */}
        <div><Icon /></div>
        <div id="my_score_container">
            <p class="my_score">My Score</p>
        </div>
{/* end of logo and title */}

{/* Topic 1 */}
        <div id='container' onClick={ToggleOne}>
            <div className='drop-down'>
                <p id='topic-one'>Topic 1</p>
                <span id='down-arrow' className="material-icons">
                    keyboard_arrow_down
                </span>

            </div>
        </div>

        <div id='topic_one-container'>

            <div id='answer_one'>
                <label  onClick={BlueButton} className='container' >Question 1
                    <span  onClick={BlueButton} ></span>
                    </label>
                

                <label  onClick={BlueButton} className='container'>Question 2
                    <span  onClick={BlueButton} ></span>
                </label>


                <label onClick={BlueButton} className='container'>Question 3
                    <span onClick={BlueButton} ></span>
                </label>


                <label onClick={BlueButton} className='container'>Question 4
                    <span onClick={BlueButton} ></span>
                </label>

                <label onClick={BlueButton} className='container'>Question 5
                    <span onClick={BlueButton} ></span>
                </label>

            </div>
    
            <div id='Button-text'>
                <div id='button'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 1 */}


{/* Topic 2 */}
<div id='container' onClick={ToggleTwo}>
            <div className='drop-down'>
                <p id='topic-two'>Topic 1</p>
                <span id='down-arrow2' className="material-icons">
                    keyboard_arrow_down
                </span>

            </div>
        </div>

        <div id='topic_two-container'>

            <div id='answer_two'>
                <label  onClick={BlueButton} className='container' >Question 1
                    <span  onClick={BlueButton} ></span>
                    </label>
                

                <label  onClick={BlueButton} className='container'>Question 2
                    <span  onClick={BlueButton} ></span>
                </label>


                <label onClick={BlueButton} className='container'>Question 3
                    <span onClick={BlueButton} ></span>
                </label>


                <label onClick={BlueButton} className='container'>Question 4
                    <span onClick={BlueButton} ></span>
                </label>

                <label onClick={BlueButton} className='container'>Question 5
                    <span onClick={BlueButton} ></span>
                </label>

            </div>
    
            <div id='Button-text'>
                <div id='button'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 2 */}

        <div id='progress-container'>
            <p id='explanation'>Progress</p>
        </div>

        <hr class="line"></hr>

        <div id="progress_bar">
            <div class='progress'></div>
        </div>

        <div id="topic_button"><GreenButton
            text='Pick another topic'
        /></div>


    <div><Menu /></div>
   


</div>

var drought_state = false;

function ToggleOne(){
    if(drought_state === false){
    document.querySelector("#down-arrow").style.transform = 'rotate(180deg)';
    document.querySelector("#topic_one-container").style.display = 'block';
    drought_state = true;
    }else if(drought_state === true){
        document.querySelector("#down-arrow").style.transform = 'rotate(0deg)';
        document.querySelector("#topic_one-container").style.display = 'none';
        drought_state = false;
    }
}

var two_state = false;

function ToggleTwo(){
    if(two_state === false){
    document.querySelector("#down-arrow2").style.transform = 'rotate(180deg)';
    document.querySelector("#topic_two-container").style.display = 'block';
    two_state = true;
    }else if(two_state === true){
        document.querySelector("#down-arrow2").style.transform = 'rotate(0deg)';
        document.querySelector("#topic_two-container").style.display = 'none';
        two_state = false;
    }
}

 
 function BlueButton(){
    document.querySelector("#button").style.backgroundColor = '#46c75f';
}

 ScorePage.defaultProps
export default ScorePage;


            /* <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button>
            <button class='score'><b>Topic 1</b></button> */
