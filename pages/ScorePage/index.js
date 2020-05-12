import React from 'react';
import './Scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import { data } from '../../data';



const ScorePage = () => <div id='score-page'>

{/* logo & title */}
        <div><Icon /></div>
        <div id="my_score_container">
            <p className="my_score">Quizzes</p>
        </div>
{/* end of logo and title */}

<div className="gwarming">
    <hr/>
    <h3 className="gw">Global Warming</h3>
</div>

{/* Topic 1 */}
        <div id='container' onClick={ToggleOne}>
            <div className='drop-down1'>
                <p id='topic-one'>Wildfires</p>
 Tanisha
                {/* <span id='down-arrow' >
                    0/5
                </span> */}

                <span id='down-arrow' >
                    {data.score}/4
                </span>
 master

            </div>
        </div>

        <div id='topic_one-container'>

            <div id='answer_one'>
{/*                 
                <p className='container' >
                    Question 1 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 2 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 3 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 4 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 5 <span className='scorenum'>0/1</span>
                </p>
                

                {/* <label  onClick={BlueButton} className='container'>Question 2
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
                </label> */} 

            </div>
    
            <div id='Button-text'>
                <div id='button1'>Start Quiz</div>
            </div>

        </div>

{/* End of topic 1 */}


{/* Topic 2 */}
<div id='container' onClick={ToggleTwo}>
            <div className='drop-down2'>
 Tanisha
                <p id='topic-two'>Water Shortages</p>
                {/* <span id='down-arrow2' >
                    0/5
                </span> */}

                <p id='topic-two'>Water Shortage</p>
                <span id='down-arrow2' >
                    {data.score}/4
                </span>
 master

            </div>
        </div>

        <div id='topic_two-container'>

            <div id='answer_two'>
{/* 
                <p className='container' >
                    Question 1 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 2 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 3 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 4 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 5 <span className='scorenum'>0/1</span>
                </p> */}

                {/* <label  onClick={TwoButton} className='container' >Question 1
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
 */}
            </div>
    
            <div id='Button-text'>
                    <div id='button2'>Start Quiz</div>
            </div>

        </div>

{/* End of topic 2 */}

{/* Topic 3 */}
<div id='container' onClick={ToggleThree}>
            <div className='drop-down3'>
                <p id='topic-three'>Famine</p>
 Tanisha
                {/* <span id='down-arrow3' >
                    0/5
                </span> */}

                <span id='down-arrow3' >
                    0/4
                </span>
 master

            </div>
        </div>

        <div id='topic_three-container'>

            <div id='answer_three'>

                {/* <p className='container' >
                    Question 1 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 2 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 3 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 4 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 5 <span className='scorenum'>0/1</span>
                </p> */}

                {/* <label  onClick={ThreeButton} className='container' >Question 1
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
                </label> */}

            </div>
    
            <div id='Button-text'>
                <div id='button3'>Start Quiz</div>
            </div>

        </div>

{/* End of topic 3 */}

{/* Topic 4 */}
<div id='container' onClick={ToggleFour}>
            <div className='drop-down4'>
                <p id='topic-four'>Wild Life</p>
                {/* <span id='down-arrow4' >
                    0/5
                </span> */}

            </div>
        </div>

        <div id='topic_four-container'>

            <div id='answer_four'>

                {/* <p className='container' >
                    Question 1 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 2 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 3 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 4 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 5 <span className='scorenum'>0/1</span>
                </p> */}

                {/* <label  onClick={FourButton} className='container' >Question 1
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
 */}
            </div>
    
            <div id='Button-text'>
                <div id='button4'>Start Quiz</div>
            </div>

        </div>

{/* End of topic 4 */}

<div className="pollution">
    <hr/>
    <h3 className="po">Pollution</h3>
</div>


{/* Topic 5 */}
<div id='container' onClick={ToggleFive}>
            <div className='drop-down5'>
                <p id='topic-five'>Iceberg Melting</p>
                {/* <span id='down-arrow5' >
                    0/5
                </span>
 */}
            </div>
        </div>

        <div id='topic_five-container'>

            <div id='answer_five'>

                {/* <p className='container' >
                    Question 1 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 2 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 3 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 4 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 5 <span className='scorenum'>0/1</span>
                </p> */}

                {/* <label  onClick={FiveButton} className='container' >Question 1
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
 */}
            </div>
    
            <div id='Button-text'>
                <div id='button5'>Start Quiz</div>
            </div>

        </div>

{/* End of topic 5 */}

{/* Topic 6 */}
<div id='container' onClick={ToggleSix}>
            <div className='drop-down6'>
                <p id='topic-six'>Cities</p>
                {/* <span id='down-arrow6' >
                    0/5
                </span>
 */}
            </div>
        </div>

        <div id='topic_six-container'>

            <div id='answer_six'>

                {/* <p className='container' >
                    Question 1 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 2 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 3 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 4 <span className='scorenum'>0/1</span>
                </p>
                
                <p className='container' >
                    Question 5 <span className='scorenum'>0/1</span>
                </p>
 */}
                {/* <label  onClick={SixButton} className='container' >Question 1
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
 */}
            </div>
    
            <div id='Button-text'>
                <div id='button6'>Start Quiz</div>
            </div>

        </div>

{/* End of topic 6 */}


{/* 
        <div id='progress-container'>
            <p id='explanation'>Progress</p>
        </div>

        <hr className="line"></hr>

        <div id="progress_bar">
            <div className='progress'></div>
        </div>

        {/* <div id="topic_button"><GreenButton
            text='Pick another topic'
        /></div> */}


    <div><Menu /></div>
   


</div>

var one_state = false;

function ToggleOne(){
    if(one_state === false){
        document.querySelector(".drop-down1").style.backgroundColor = 'white';
        document.querySelector(".drop-down1").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_one-container").style.display = 'block';
    one_state = true;
    }else if(one_state === true){
        document.querySelector(".drop-down1").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down1").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_one-container").style.display = 'none';
        one_state = false;
    }
}

var two_state = false;

function ToggleTwo(){
    if(two_state === false){
        document.querySelector(".drop-down2").style.backgroundColor = 'white';
        document.querySelector(".drop-down2").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_two-container").style.display = 'block';
    two_state = true;
    }else if(two_state === true){
        document.querySelector(".drop-down2").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down2").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_two-container").style.display = 'none';
        two_state = false;
    }
}

var three_state = false;

function ToggleThree(){
    if(three_state === false){
        document.querySelector(".drop-down3").style.backgroundColor = 'white';
        document.querySelector(".drop-down3").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_three-container").style.display = 'block';
    three_state = true;
    }else if(three_state === true){
        document.querySelector(".drop-down3").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down3").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_three-container").style.display = 'none';
        three_state = false;
    }
}

var four_state = false;

function ToggleFour(){
    if(four_state === false){
        document.querySelector(".drop-down4").style.backgroundColor = 'white';
        document.querySelector(".drop-down4").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_four-container").style.display = 'block';
    four_state = true;
    }else if(four_state === true){
        document.querySelector(".drop-down4").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down4").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_four-container").style.display = 'none';
        four_state = false;
    }
}
 
var five_state = false;

function ToggleFive(){
    if(five_state === false){
        document.querySelector(".drop-down5").style.backgroundColor = 'white';
        document.querySelector(".drop-down5").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_five-container").style.display = 'block';
    five_state = true;
    }else if(five_state === true){
        document.querySelector(".drop-down5").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down5").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_five-container").style.display = 'none';
        five_state = false;
    }
}

var six_state = false;

function ToggleSix(){
    if(six_state === false){
        document.querySelector(".drop-down6").style.backgroundColor = 'white';
        document.querySelector(".drop-down6").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_six-container").style.display = 'block';
    six_state = true;
    }else if(six_state === true){
        document.querySelector(".drop-down6").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down6").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_six-container").style.display = 'none';
        six_state = false;
    }
}

var seven_state = false;


 ScorePage.defaultProps
export default ScorePage;

