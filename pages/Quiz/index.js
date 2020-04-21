import React from 'react';
import './quiz.css';
import Link from 'next/link';

const Quiz = ({category, quizName, quizNumber, quizQuestion, quizChoice}) => <div id='quiz-container'>
    <div id="quiz-category">{category}</div>
    <div id="quiz-information">
        <div id="quiz-question-number">{quizName}</div>
        <div>{quizNumber}</div>
    </div>
    <hr />
    <div id="quiz-question" >{quizQuestion}</div>
    <div className="quiz-choices">
        <label  onClick={HighlightButton} className='container1'><p>{quizChoice}</p>
            <input type='radio' name='radio' />
            <span  onClick={HighlightButton} className='checkmark'></span>
        </label>
    </div>
    <div className="quiz-choices">
        <label  onClick={HighlightButton} className='container1'><p>{quizChoice}</p>
            <input type='radio' name='radio' />
            <span  onClick={HighlightButton} className='checkmark'></span>
        </label>
    </div>
    <div className="quiz-choices">
        <label  onClick={HighlightButton} className='container1'><p>{quizChoice}</p>
            <input type='radio' name='radio' />
            <span  onClick={HighlightButton} className='checkmark'></span>
        </label>
    </div>
    <div className="quiz-choices">
        <label  onClick={HighlightButton} className='container1'><p>{quizChoice}</p>
            <input type='radio' name='radio' />
            <span  onClick={HighlightButton} className='checkmark'></span>
        </label>
    </div>
    <div id='Button-text'>
        <Link href='./ScorePage'><div id='button1'>Next</div></Link>
    </div>

</div>

function HighlightButton(){
    document.querySelector("#button").style.backgroundColor = '#46c75f';
}

// function NextQuizQuestion(){
//     if (){

//     }
// }

Quiz.defaultProps = {
    category: "Category",
    quizName: "Question 1",
    quizNumber: "1/5",
    quizQuestion: "Question goes here...",
    quizChoice: "Choice"
}

export default Quiz;