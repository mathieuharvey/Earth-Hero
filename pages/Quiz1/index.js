import {useState} from 'react';
import './quiz.css';
import Router from 'next/router';
import Quiz from '../../comps/Quiz';

import {data} from '../../data';

// var index = 0;
// const quizarray = [
//     "Second question",
//     "Third question",
//     "Fourth Question",
//     "fifth quesiton"
// ]
var ind = 0;


const Quiz1 = () => {

    var quizQuestions = "";
    var category = "";
    var quizName = "";
    var quizNumber = "";
    var quizQuestion = "";
    var quizChoice1 = "";
    var quizChoice2 = "";
    var quizChoice3 = "";
    var quizChoice4 = "";
    if(data.quiz === "wildfiresquiz"){
        category = "Wildfires";
        quizQuestions = [
            {
                quizName:"Question 1",
                quizNumber:"1/5",
                quizQuestion:"What kind of environments are very likely to have wildfires start?",
                quizChoice1:"Wet and rainy environments",
                quizChoice2:"Dry environments",
                quizChoice3:"Snowy and cold environments",
                quizChoice4:"Choice 4"
            },
            {
                quizName:"Question 2",
                quizNumber:"2/5",
                quizQuestion:"Which of the following is a problem caused by wildfires?",
                quizChoice1:"Flooding",
                quizChoice2:"Respiratory problems",
                quizChoice3:"Cold temperatures",
                quizChoice4:"Tsunamis"
            },
            {
                quizName:"Question 3",
                quizNumber:"3/5",
                quizQuestion:"What is one good thing that wildfires help with?",
                quizChoice1:"They kill off the surplus amount of wildlife",
                quizChoice2:"They can burn old houses down",
                quizChoice3:"They kill bad diseases and insects that harm trees",
                quizChoice4:"They help produce heat in cold areas"
            },
            {
                quizName:"Question 4",
                quizNumber:"4/5",
                quizQuestion:"True or false: Wildfires can start from natural disasters.",
                quizChoice1:"True",
                quizChoice2:"False",
                quizChoice3:"True",
                quizChoice4:"False"
            },
            {
                quizName:"Question 5",
                quizNumber:"5/5",
                quizQuestion:"Which of the following is a way you can help prevent wildfires?",
                quizChoice1:"Not extinguishing your fire",
                quizChoice2:"Starting a fire when it's windy",
                quizChoice3:"Never leaving your fire unattended",
                quizChoice4:"Thowing away lit matches"
            }
        ]
    }else if(data.quiz === "watershortagequiz"){
        category = "Water Shortage";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/5",
                quizQuestion: "True or false: Dry environments tend to suffer from water shortage more than wet environments.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "True",
                quizChoice4: "False"
            },
            {
                quizName: "Question 2",
                quizNumber : "2/5",
                quizQuestion : "What is the reason why some water found in some countries can be dangerous to drink?",
                quizChoice1: "The water is too cold",
                quizChoice2: "The water is polluted",
                quizChoice3: "The water has minerals in it",
                quizChoice4: "Choice 4"
            },
            {
                quizName: "Question 3",
                quizNumber: "3/5",
                quizQuestion: "If most of the Earth is made of water, how come we can’t use all of it for drinking?",
                quizChoice1: "Most of Earth's water is too expensive",
                quizChoice2: "Most of Earth's water is too far away",
                quizChoice3: "Most of Earth's water has bugs in it",
                quizChoice4: "Most of Earth's water is salt water"
            },
            {
                quizName: "Question 4",
                quizNumber: "4/5",
                quizQuestion: "What is one way you can help with the issue of water shortage?",
                quizChoice1: "Donate clean water to charities and families in need",
                quizChoice2: "Keep the sink running often",
                quizChoice3: "Take longer showers",
                quizChoice4: "Choice 4"
            },
            {
                quizName: "Question 5",
                quizNumber: "5/5",
                quizQuestion: "True or false: People who experience water shortage in their area may experience dehydration and disease.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "True",
                quizChoice4: "False"
            }
        ]
    }else if(data.quiz === "faminequiz"){
        category = "Famine";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "What is a famine?",
                quizChoice1: "A surplus amount of food in an area",
                quizChoice2: "A lack of water in an area",
                quizChoice3: "An extreme shortage of food in an area",
                quizChoice4: "An area that is very dry"
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "What does famine quite often lead to?",
                quizChoice1: "Floods",
                quizChoice2: "Droughts",
                quizChoice3: "Starvation",
                quizChoice4: "A natural disaster"
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or false: Famine can be caused by crop failure.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "True",
                quizChoice4: "False"
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True or false: Famine can lead to increase in intelligence.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "True",
                quizChoice4: "False"
            }
        ]
    }else if(data.quiz === 'wildlifequiz'){
        category = "Wildlife";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "How do droughts affect the wildlife?",
                quizChoice1: "They help keep wildlife healthy",
                quizChoice2: "They can cause diseases that harm the wildlife",
                quizChoice3: "Droughts allow the wildlife to live their best lives",
                quizChoice4: "They provide more water that helps the wildlife"
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "What do droughts lead to?",
                quizChoice1: "Diseases",
                quizChoice2: "Wildfires",
                quizChoice3: "Decrease of wildlife",
                quizChoice4: "All of the above"
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or false: Droughts are increasing the population of wildlife.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "True",
                quizChoice4: "False"
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True or false: You can help stop droughts by conserving water.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "True",
                quizChoice4: "False"
            }
        ]
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
        />
        <div id='Button-text'>
        <div id='button1' onClick={()=>{
            if(ind >= quizQuestions.length-1){
                Router.push("/ScorePage");
                console.log(onclick);
            } else {
                setInd(ind+1);
            }
        }}>Next</div>
        </div>
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