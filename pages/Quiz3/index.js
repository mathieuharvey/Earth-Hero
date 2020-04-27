import React from 'react';
import './quiz.css';
import Link from 'next/link';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';

const Quiz3 = ({category, quizName, quizNumber, quizQuestion, quizChoice1, quizChoice2, quizChoice3, quizChoice4}) => <div>
 <Icon />
    <div id='quiz-container'>
        <div id="quiz-category">{category}</div>
        <div id="quiz-information">
            <div id="quiz-question-number">{quizName}</div>
            <div>{quizNumber}</div>
        </div>
        <hr />
            <div id="quiz-question" >{quizQuestion}</div>
            <div className="quiz-choices">
                <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice1}</p>
                    <input onClick={SelectedChoice} type='radio' name='radio' />
                    <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
                </label>
            </div>
            <div className="quiz-choices">
                <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice2}</p>
                    <input onClick={SelectedChoice} type='radio' name='radio' />
                    <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
                </label>
            </div>
            <div className="quiz-choices">
                <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice3}</p>
                    <input onClick={SelectedChoice} type='radio' name='radio' />
                    <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
                </label>
            </div>
            <div className="quiz-choices">
                <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice4}</p>
                    <input onClick={SelectedChoice} type='radio' name='radio' />
                    <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
                </label>
            </div>

        <div onClick={NextQuizQuestion} id='Button-text'>
            <div onClick={NextQuizQuestion} id='button1'>Next</div>
        </div>
    </div>
    <Menu />
</div>

function HighlightButtonQuiz(){
    document.querySelector("#button1").style.backgroundColor = '#46c75f';
}

//added by cc
var selected = false;
function SelectedChoice(){
    selected = true;
}

function NextQuizQuestion(){
    if (selected === true){
        window.location.pathname = '/Quiz4';
    }else{

    }
}
//

Quiz3.defaultProps = {
    category: "Wildfires",
    quizName: "Question 3",
    quizNumber: "3/5",
    quizQuestion: "What is one good thing that wildfires help with?",
    quizChoice1: "They kill off the surplus amount of wildlife",
    quizChoice2: "They can burn old houses down",
    quizChoice3: "They kill bad diseases and insects that harm trees",
    quizChoice4: "They help produce heat in cold areas"
}

export default Quiz3;