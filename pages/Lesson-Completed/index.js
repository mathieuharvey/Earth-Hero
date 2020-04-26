import React from 'react';
import './lessoncompleted.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import GreenButton from '../../comps/Green-button';
import Link from 'next/link';

var CardsStack = require('../../images/cards-stack.svg');

const LessonCompleted = () => {
    return <div>
        <Icon />
    <div id='lesson-completed'>
        <div id='take-quiz-text'> 
            <p>Great! You know a lot more on Wildfires now. <br /> Ready to take the Quiz?</p>
        </div>
        <Link href='/Quiz'><div id='take-quiz'>
            <GreenButton text='Take the Quiz'/>
        </div></Link>
        <img src={CardsStack} id='cards-stack'/>
    </div>
    <Menu />
    </div>
}

export default LessonCompleted;