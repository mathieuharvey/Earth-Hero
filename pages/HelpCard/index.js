import React, { useState } from 'react';
import './help.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';
import Router from 'next/router';

var CardSideImgLeft = require('../../images/card-left.svg');
var checkmarkIcon = require('../../images/checkmark.svg');

const HelpCard = () => {

    const [shape, setShape] = useState();

    return <div id="helpcard" onLoad={() => {
        setShape();
        document.getElementById('card-button').style.width = "40px";
        document.getElementById('next-icon').style.margin = "5px";
        document.getElementById('next-icon').src = checkmarkIcon;
    }}> 
        <Icon />
        <InfoCard 
            category= "Wildfires"
            title= "What can I do to help?"
            text= "There are many ways you can help prevent wildfires from starting and keeping our environment safe:"
            help1= "1. Never leave a fire unattended. Always make sure any fires you use are afterwards completely distinguished."
            help2= "2. Do not throw away any matches, cigarettes, or other smoking materials onto any part of the ground outside."
            help3= "3. Only start campfires in an appropriate fire pit and ensure your surroundings are safe."
            help4= "4. If it's windy out, don't start a fire!"
            buttonid='/Lesson-Completed'
        />
        <Menu />
        <img id='card-side-left' src={CardSideImgLeft} onClick={() => {Router.push('/ProblemCard')}}/>
    </div>

}

export default HelpCard;