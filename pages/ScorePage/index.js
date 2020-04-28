import React from 'react';
import './Scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';



const ScorePage = () => <div id='score-page'>

{/* logo & title */}
        <div><Icon /></div>
        <div id="my_score_container">
            <p className="my_score">My Score</p>
        </div>
{/* end of logo and title */}

{/* Topic 1 */}
        <div id='container' onClick={ToggleOne}>
            <div className='drop-down1'>
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
                <div id='button1'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 1 */}


{/* Topic 2 */}
<div id='container' onClick={ToggleTwo}>
            <div className='drop-down1'>
                <p id='topic-two'>Topic 2</p>
                <span id='down-arrow2' className="material-icons">
                    keyboard_arrow_down
                </span>

            </div>
        </div>

        <div id='topic_two-container'>

            <div id='answer_two'>
                <label  onClick={TwoButton} className='container' >Question 1
                    <span  onClick={TwoButton} ></span>
                    </label>
                

                <label  onClick={TwoButton} className='container'>Question 2
                    <span  onClick={TwoButton} ></span>
                </label>


                <label onClick={TwoButton} className='container'>Question 3
                    <span onClick={TwoButton} ></span>
                </label>


                <label onClick={TwoButton} className='container'>Question 4
                    <span onClick={TwoButton} ></span>
                </label>

                <label onClick={TwoButton} className='container'>Question 5
                    <span onClick={TwoButton} ></span>
                </label>

            </div>
    
            <div id='Button-text'>
                    <div id='button2'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 2 */}

{/* Topic 3 */}
<div id='container' onClick={ToggleThree}>
            <div className='drop-down1'>
                <p id='topic-three'>Topic 3</p>
                <span id='down-arrow3' className="material-icons">
                    keyboard_arrow_down
                </span>

            </div>
        </div>

        <div id='topic_three-container'>

            <div id='answer_three'>
                <label  onClick={ThreeButton} className='container' >Question 1
                    <span  onClick={ThreeButton} ></span>
                    </label>
                

                <label  onClick={ThreeButton} className='container'>Question 2
                    <span  onClick={ThreeButton} ></span>
                </label>


                <label onClick={ThreeButton} className='container'>Question 3
                    <span onClick={ThreeButton} ></span>
                </label>


                <label onClick={ThreeButton} className='container'>Question 4
                    <span onClick={ThreeButton} ></span>
                </label>

                <label onClick={ThreeButton} className='container'>Question 5
                    <span onClick={ThreeButton} ></span>
                </label>

            </div>
    
            <div id='Button-text'>
                <div id='button3'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 3 */}

{/* Topic 4 */}
<div id='container' onClick={ToggleFour}>
            <div className='drop-down1'>
                <p id='topic-four'>Topic 4</p>
                <span id='down-arrow4' className="material-icons">
                    keyboard_arrow_down
                </span>

            </div>
        </div>

        <div id='topic_four-container'>

            <div id='answer_four'>
                <label  onClick={FourButton} className='container' >Question 1
                    <span  onClick={FourButton} ></span>
                    </label>
                

                <label  onClick={FourButton} className='container'>Question 2
                    <span  onClick={FourButton} ></span>
                </label>


                <label onClick={FourButton} className='container'>Question 3
                    <span onClick={FourButton} ></span>
                </label>


                <label onClick={FourButton} className='container'>Question 4
                    <span onClick={FourButton} ></span>
                </label>

                <label onClick={FourButton} className='container'>Question 5
                    <span onClick={FourButton} ></span>
                </label>

            </div>
    
            <div id='Button-text'>
                <div id='button4'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 4 */}

{/* Topic 5 */}
<div id='container' onClick={ToggleFive}>
            <div className='drop-down1'>
                <p id='topic-five'>Topic 5</p>
                <span id='down-arrow5' className="material-icons">
                    keyboard_arrow_down
                </span>

            </div>
        </div>

        <div id='topic_five-container'>

            <div id='answer_five'>
                <label  onClick={FiveButton} className='container' >Question 1
                    <span  onClick={FiveButton} ></span>
                    </label>
                

                <label  onClick={FiveButton} className='container'>Question 2
                    <span  onClick={FiveButton} ></span>
                </label>


                <label onClick={FiveButton} className='container'>Question 3
                    <span onClick={FiveButton} ></span>
                </label>


                <label onClick={FiveButton} className='container'>Question 4
                    <span onClick={FiveButton} ></span>
                </label>

                <label onClick={FiveButton} className='container'>Question 5
                    <span onClick={FiveButton} ></span>
                </label>

            </div>
    
            <div id='Button-text'>
                <div id='button5'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 5 */}

{/* Topic 6 */}
<div id='container' onClick={ToggleSix}>
            <div className='drop-down1'>
                <p id='topic-six'>Topic 6</p>
                <span id='down-arrow6' className="material-icons">
                    keyboard_arrow_down
                </span>

            </div>
        </div>

        <div id='topic_six-container'>

            <div id='answer_six'>
                <label  onClick={SixButton} className='container' >Question 1
                    <span  onClick={SixButton} ></span>
                    </label>
                

                <label  onClick={SixButton} className='container'>Question 2
                    <span  onClick={SixButton} ></span>
                </label>


                <label onClick={SixButton} className='container'>Question 3
                    <span onClick={SixButton} ></span>
                </label>


                <label onClick={SixButton} className='container'>Question 4
                    <span onClick={SixButton} ></span>
                </label>

                <label onClick={SixButton} className='container'>Question 5
                    <span onClick={SixButton} ></span>
                </label>

            </div>
    
            <div id='Button-text'>
                <div id='button6'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 6 */}

{/* Topic 7 */}
<div id='container' onClick={ToggleSeven}>
            <div className='drop-down1'>
                <p id='topic-seven'>Topic 7</p>
                <span id='down-arrow7' className="material-icons">
                    keyboard_arrow_down
                </span>

            </div>
        </div>

        <div id='topic_seven-container'>

            <div id='answer_seven'>
                <label  onClick={SevenButton} className='container' >Question 1
                    <span  onClick={SevenButton} ></span>
                    </label>
                

                <label  onClick={SevenButton} className='container'>Question 2
                    <span  onClick={SevenButton} ></span>
                </label>


                <label onClick={SevenButton} className='container'>Question 3
                    <span onClick={SevenButton} ></span>
                </label>


                <label onClick={SevenButton} className='container'>Question 4
                    <span onClick={SevenButton} ></span>
                </label>

                <label onClick={SevenButton} className='container'>Question 5
                    <span onClick={SevenButton} ></span>
                </label>

            </div>
    
            <div id='Button-text'>
                <div id='button7'>Take Quiz Again</div>
            </div>

        </div>

{/* End of topic 7 */}


        <div id='progress-container'>
            <p id='explanation'>Progress</p>
        </div>

        <hr className="line"></hr>

        <div id="progress_bar">
            <div className='progress'></div>
        </div>

        <div id="topic_button"><GreenButton
            text='Pick another topic'
        /></div>


    <div><Menu /></div>
   


</div>

var one_state = false;

function ToggleOne(){
    if(one_state === false){
    document.querySelector("#down-arrow").style.transform = 'rotate(180deg)';
    document.querySelector("#topic_one-container").style.display = 'block';
    one_state = true;
    }else if(one_state === true){
        document.querySelector("#down-arrow").style.transform = 'rotate(0deg)';
        document.querySelector("#topic_one-container").style.display = 'none';
        one_state = false;
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

var three_state = false;

function ToggleThree(){
    if(three_state === false){
    document.querySelector("#down-arrow3").style.transform = 'rotate(180deg)';
    document.querySelector("#topic_three-container").style.display = 'block';
    three_state = true;
    }else if(three_state === true){
        document.querySelector("#down-arrow3").style.transform = 'rotate(0deg)';
        document.querySelector("#topic_three-container").style.display = 'none';
        three_state = false;
    }
}

var four_state = false;

function ToggleFour(){
    if(four_state === false){
    document.querySelector("#down-arrow4").style.transform = 'rotate(180deg)';
    document.querySelector("#topic_four-container").style.display = 'block';
    four_state = true;
    }else if(four_state === true){
        document.querySelector("#down-arrow4").style.transform = 'rotate(0deg)';
        document.querySelector("#topic_four-container").style.display = 'none';
        four_state = false;
    }
}
 
var five_state = false;

function ToggleFive(){
    if(five_state === false){
    document.querySelector("#down-arrow5").style.transform = 'rotate(180deg)';
    document.querySelector("#topic_five-container").style.display = 'block';
    five_state = true;
    }else if(five_state === true){
        document.querySelector("#down-arrow5").style.transform = 'rotate(0deg)';
        document.querySelector("#topic_five-container").style.display = 'none';
        five_state = false;
    }
}

var six_state = false;

function ToggleSix(){
    if(six_state === false){
    document.querySelector("#down-arrow6").style.transform = 'rotate(180deg)';
    document.querySelector("#topic_six-container").style.display = 'block';
    six_state = true;
    }else if(six_state === true){
        document.querySelector("#down-arrow6").style.transform = 'rotate(0deg)';
        document.querySelector("#topic_six-container").style.display = 'none';
        six_state = false;
    }
}

var seven_state = false;

function ToggleSeven(){
    if(seven_state === false){
    document.querySelector("#down-arrow7").style.transform = 'rotate(180deg)';
    document.querySelector("#topic_seven-container").style.display = 'block';
    seven_state = true;
    }else if(seven_state === true){
        document.querySelector("#down-arrow7").style.transform = 'rotate(0deg)';
        document.querySelector("#topic_seven-container").style.display = 'none';
        seven_state = false;
    }
}


function BlueButton(){
    document.querySelector("#button1").style.backgroundColor = '#46c75f';
}
function TwoButton(){
    document.querySelector("#button2").style.backgroundColor = '#46c75f';
}
function ThreeButton(){
    document.querySelector("#button3").style.backgroundColor = '#46c75f';
}
function FourButton(){
    document.querySelector("#button4").style.backgroundColor = '#46c75f';
}
function FiveButton(){
    document.querySelector("#button5").style.backgroundColor = '#46c75f';
}
function SixButton(){
    document.querySelector("#button6").style.backgroundColor = '#46c75f';
}
function SevenButton(){
    document.querySelector("#button7").style.backgroundColor = '#46c75f';
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
