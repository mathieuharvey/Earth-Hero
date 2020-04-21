import React, { useState } from 'react';
import './help.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';

var CardSideImg = require('../../images/card-side.svg');

const HelpCard = () => <div id="helpcard">
        <Icon />
        <InfoCard 
            category= "Category"
            title= "What can I do to help?"
            text= ""
            button= ""/>
        <Menu />
        <img id='card-side-left' src={CardSideImg} />
    </div>


export default HelpCard;