import {useState} from 'react';
import './quiz.css';
import Router from 'next/router';
import Quiz from '../../comps/Quiz';

import {data} from '../../data';

var index = 0;
const quizarray = [
    "Second question",
    "Third question",
    "Fourth Question",
    "fifth quesiton"
]




const Quiz1 = () => {

    var category = "";
    var quizName = "";
    var quizNumber = "";
    var quizQuestion = "";
    var quizChoice1 = "";
    var quizChoice2 = "";
    var quizChoice3 = "";
    var quizChoice4 = "";
    var buttonid = "";
    if(data.quiz === "wildfiresquiz"){
        category = "Wildfires";
        quizQuestions = [
            {
                quizName:"Question 1",
                quizNumber:"1/5",
                quizQuestion:"True or false: Dry environments tend to suffer from water shortage more than wet environments.",
                quizChoice1:"True",
                quizChoice2:"False",
                quizChoice3:"True",
                quizChoice4:"False"
            },
            {
                quizName:"Question 2",
                quizNumber:"1/5",
                quizQuestion:"q2",
                quizChoice1:"ba",
                quizChoice2:"da",
                quizChoice3:"ee",
                quizChoice4:"ff"
            }
        ]
    }else if(data.subcategory === "watershortagequiz"){
        category = "Water Shortage";
        quizName = "Question 1";
        quizNumber = "1/5";
        quizQuestion = "True or false: Dry environments tend to suffer from water shortage more than wet environments.";
        quizChoice1 = "True";
        quizChoice2 = "False";
        buttonid = switchQuestion;
    }else if(data.subcategory === "faminequiz"){
        category = "Famine";
        quizName = "Question 1";
        quizNumber = "1/5";
        quizQuestion = "What is a famine?";
        quizChoice1 = "A surplus amount of food in an area";
        quizChoice2 = "A lack of water in an area";
        quizChoice3 = "An extreme shortage of food in an area";
        quizChoice4 = "An area that is very dry";
        buttonid = '';
    }

    const [ind, setInd] = useState(0);
    //console.log(buttonid);
    return <div id='quizcomp'>
        {
        /*data.buttonid === <div id='button1' onClick={()=>{
        switchQuestion(quizarray[index]);
        index++; 
        }
    } />
*/
    }
        
    <div>
        <Quiz
        category = {category}
        quizName = {quizQuestions[ind].quizName}
        quizNumber = {quizQuestions[ind].quizNumber}
        quizQuestion = {quizQuestions[ind].quizQuestion}
        quizChoice1 = {quizQuestions[ind].quizChoice1}
        quizChoice2 = {quizQuestions[ind].quizChoice2}
        quizChoice3 = {quizQuestions[ind].quizChoice3}
        quizChoice4 = {quizQuestions[ind].quizChoice4}
        buttonid={buttonid}
        />
        <button onClick={()=>{
            if(ind >= quizQuestions.length-1){
                Router.push("/results");
            } else {
                setInd(ind+1);
            }
        }}>NextQ</button>
    </div>
    </div>
    
}






// const Quiz1 = ({category, quizName, quizNumber, quizQuestion, quizChoice1, quizChoice2, quizChoice3, quizChoice4}) => <div>
//  <Icon />
//     <div id='quiz-container'>
//         <div id="quiz-category">{category}</div>
//         <div id="quiz-information">
//             <div id="quiz-question-number">{quizName}</div>
//             <div>{quizNumber}</div>
//         </div>
//         <hr />
//         <div id="quiz-question" >{quizQuestion}</div>
//         <div className="quiz-choices">
//             <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice1}</p>
//                 <input onClick={SelectedChoice} type='radio' name='radio' />
//                 <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
//             </label>
//         </div>
//         <div className="quiz-choices">
//             <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice2}</p>
//                 <input onClick={SelectedChoice} type='radio' name='radio' />
//                 <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
//             </label>
//         </div>
//         <div className="quiz-choices">
//             <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice3}</p>
//                 <input onClick={SelectedChoice} type='radio' name='radio' />
//                 <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
//             </label>
//         </div>
//         {/* <div className="quiz-choices">
//             <label  onClick={HighlightButtonQuiz} className='container1'><p>{quizChoice4}</p>
//                 <input type='radio' name='radio' />
//                 <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
//             </label>
//         </div> */}
//         <div onClick={NextQuizQuestion} id='Button-text'>
//             <div onClick={NextQuizQuestion} id='button1'>Next</div>
//         </div>

//     </div>
//     <Menu />
// </div>

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
        window.location.pathname = '/Quiz2';
    }else{

    }
}
//



Quiz1.defaultProps = {
    category: "Wildfires",
    quizName: "Question 1",
    quizNumber: "1/5",
    quizQuestion: "What kind of environments are very likely to have wildfires start?",
    quizChoice1: "Wet and rainy environments",
    quizChoice2: "Dry environments",
    quizChoice3: "Snowy and cold environments",
    quizChoice4: ""
}

export default Quiz1;