import React, { useState } from 'react';
import './problem.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';

var CardSideImg = require('../../images/card-side.svg');
var CardSideImgLeft = require('../../images/card-left.svg');

const ProblemCard = () => <div id="helpcard">
        <Icon />
        <InfoCard 
            category= "Category"
            title= "Why is this a problem?"
            text= "Wildfires destroy homes of humans and animals and are also a major health risk. Because of wildfires, many are left without their homes, but also animals who live in the forests. Approximately 800 million animals have died due to wildfires so far. Wildfires also produce smoke that is inhaled by adults and children who live in the affected areas. This is very dangerous, causing breathing problems and even lung damage for many."
            button= "Next"/>
        <img id='card-side-right' src={CardSideImg} />
        <img id='card-side-left' src={CardSideImgLeft} />
        <Menu />
    </div>


export default ProblemCard;