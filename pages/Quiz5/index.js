import React from 'react';
import './quiz.css';
import Link from 'next/link';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';

const Quiz5 = ({category, quizName, quizNumber, quizQuestion, quizChoice1, quizChoice2, quizChoice3, quizChoice4}) => <div>
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
                <input type='radio' name='radio' />
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>
        </div>
        <div className="quiz-choices">
            <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice2}</p>
                <input type='radio' name='radio' />
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>
        </div>
        <div className="quiz-choices">
            <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice3}</p>
                <input type='radio' name='radio' />
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>
        </div>
        <div className="quiz-choices">
            <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice4}</p>
                <input type='radio' name='radio' />
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>
        </div>
        <div id='Button-text'>
            <Link href='./ScorePage'><div id='button1'>Next</div></Link>
        </div>

    </div>
    <Menu />
</div>

function HighlightButtonQuiz(){
    document.querySelector("#button1").style.backgroundColor = '#46c75f';
}

// function NextQuizQuestion(){
//     if (){

//     }
// }

Quiz5.defaultProps = {
    category: "Wildfires",
    quizName: "Question 5",
    quizNumber: "5/5",
    quizQuestion: "Which of the following is a way you can help prevent wildfires?",
    quizChoice1: "Not distinguishing your fire",
    quizChoice2: "Starting a fire when it's windy",
    quizChoice3: "Never leaving your fire unattended",
    quizChoice4: "Throwing away lit matches"
}

export default Quiz5;