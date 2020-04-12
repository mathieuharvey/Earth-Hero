import React from 'react';
import './quiz.css';
import GreenButton from '../../comps/Green-button';

var unselected = require("../../images/circle-unselected.svg");
var selected = require("../../images/circle-selected.svg");
const Quiz = ({category, quizName, quizNumber, quizQuestion, quizChoice}) => <div id='quiz-container'>
    <div id="quiz-category">{category}</div>
    <div id="quiz-information">
        <div id="quiz-question-number">{quizName}</div>
        <div>{quizNumber}</div>
    </div>
    <hr />
    <div id="quiz-question" >{quizQuestion}</div>
    <div className="quiz-choices">
        <img src={unselected} onClick={SelectChoice} className="circle"/> {quizChoice}
    </div>
    <div className="quiz-choices">
        <img src={unselected} onClick={SelectChoice} className="circle"/> {quizChoice}
    </div>
    <div className="quiz-choices">
        <img src={unselected} onClick={SelectChoice} className="circle"/> {quizChoice}
    </div>
    <div className="quiz-choices">
        <img src={unselected} onClick={SelectChoice} className="circle"/> {quizChoice}
    </div>
    <div><GreenButton
        text='Next Question'
        onClick={DefaultClick}
        /></div>

</div>

function DefaultClick(){
    alert("Default function");
}

function SelectChoice() {
    src={selected}
}

Quiz.defaultProps = {
    category: "Category",
    quizName: "Question 1",
    quizNumber: "1/5",
    quizQuestion: "Question goes here...",
    quizChoice: "Choice"
}

export default Quiz;