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
            category= "Category"
            title= "What can I do to help?"
            text= ""
            buttonid='/Quiz'
        />
        <Menu />
        <img id='card-side-left' src={CardSideImgLeft} onClick={() => {Router.push('/ProblemCard')}}/>
    </div>

}

export default HelpCard;