import React, { useState } from 'react';
import './help.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';

const HelpCard = () => <div id="helpcard">
        <Icon />
        <InfoCard 
            category= "Category"
            title= "What can I do to help?"
            text= ""
            button= ""/>
        <Menu />
    </div>


export default HelpCard;