import React from 'react';
import './quiz.css';
import Link from 'next/link';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import Router from 'next/router';
import { data } from '../../data';

const Quiz = ({category, quizName, quizNumber, quizQuestion, quizChoice1, quizChoice2, quizChoice3, quizChoice4, buttonid}) => <div>
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
                <input type='radio' name='radio' />
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>
        </div>


        {/* <div id='Button-text'>
            <div id='button1'>Next</div>
        </div> */}

        {/* <div onClick={() => {Router.push(buttonid)}} id='Button-text'>
            <div id='button1'>Next</div>
        </div> */}

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

// function NextQuizQuestion(){
//     if (selected === true){
//         Router.push('/Quiz1');
//     }else{
//         //
//     }
// }


Quiz.defaultProps = {
    category: "Wildfires",
    quizName: "Question 1",
    quizNumber: "1/5",
    quizQuestion: "What kind of environments are very likely to have wildfires start?",
    quizChoice1: "Wet and rainy environments",
    quizChoice2: "Dry environments",
    quizChoice3: "Snowy and cold environments",
    quizChoice4: ""
}

export default Quiz;