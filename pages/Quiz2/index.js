import React from 'react';
import './quiz.css';
import Link from 'next/link';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';

const Quiz2 = ({category, quizName, quizNumber, quizQuestion, quizChoice1, quizChoice2, quizChoice3, quizChoice4}) => <div>
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
        window.location.pathname = '/Quiz3';
    }else{

    }
}
//

Quiz2.defaultProps = {
    category: "Wildfires",
    quizName: "Question 2",
    quizNumber: "2/5",
    quizQuestion: "Which of the following is a problem caused by wildfires?",
    quizChoice1: "Flooding",
    quizChoice2: "Respiratory problems",
    quizChoice3: "Cold temperatures",
    quizChoice4: "Tsunamis"
}

export default Quiz2;