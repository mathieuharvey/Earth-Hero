import React, { useState } from 'react';
import './problem.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';
import Router from 'next/router';

var CardSideImg = require('../../images/card-side.png');
var CardSideImgLeft = require('../../images/card-left.svg');
var wildfires2 = require('../../images/wildfire_2.png')

const ProblemCard = () => <div id="helpcard">
        <Icon />
        <InfoCard 
            category= "Wildfires"
            title= "Why is this a problem?"
            text= "Wildfires destroy homes of humans and animals and are also a major health risk. Because of wildfires, many are left without their homes, but also animals who live in the forests. Approximately 800 million animals have died due to wildfires so far. Wildfires also produce smoke that is inhaled by adults and children who live in the affected areas. This is very dangerous, causing breathing problems and even lung damage for many."
            buttonid='/HelpCard'
            button= "Next"/>
        <img id='card-side-right' src={CardSideImg} onClick={() => {Router.push('/HelpCard')}}/>
        <img id='card-side-left' src={CardSideImgLeft} onClick={() => {Router.push('/WhatCard')}}/>
        <img id='wildfires-2' src={wildfires2}/>
        <Menu />
    </div>

export default ProblemCard;