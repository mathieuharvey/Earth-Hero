import React, { useState } from 'react';
import './information.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';
import Router from 'next/router';

var CardSideImg = require('../../images/card-side.svg');

const WhatCard = () => <div id="whatcard">
    <Icon />
    <div>
        <InfoCard
            category="Category"
            title="What is it?"
            text="Wildfires are fires that are out of control and burn in the wildland vegetation. They can burn forests, savannas, grasslands, and many other ecosystems. Wildfires can start from either natural occurrence or by humans. For instance, a natural occurrence would be a lightning strike, and a human cause could be from making a spark. Wildfires are most prone to start when the ecosystem is dry. This is why areas where it does not rain often are most likely to have wildfires. Sometimes wildfires can be good for the ecosystems by killing bad diseases and insects that harm trees, but quite often wildfires spread fast and are very dangerous."
            button="Got it!" 
            />
    </div>
    <Menu />
        <img id='card-side-right' src={CardSideImg} onClick={() => {Router.push('/ProblemCard')}}/>
    </div>



export default WhatCard;

// const Cards = () => { 
//     const [button, setButton] = useState("Got it!");

// return <div>
//     <Icon />
//     <div id="next-button" onClick={() => {
//         setButton("Next");
//         document.getElementById('card-button').style.width = "90px";}}>
//             <InfoCard button={button}/>
//     </div>
//     <Menu />
// </div>
// }