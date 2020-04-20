import React, { useState } from 'react';
import './problem.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';

const ProblemCard = () => <div id="helpcard">
        <Icon />
        <InfoCard 
            category= "Category"
            title= "Why is this a problem?"
            text= ""
            button= "Next"/>
        <Menu />
    </div>


export default ProblemCard;