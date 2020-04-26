import React from 'react';
import './infocard.css';
import CardButton from '../Buttons For Info Card';
import Link from 'next/link';

const InfoCard = ({ category, title, text, buttonid }) => <div id='info-card'>
    <div id='card-category'>{category}</div>
    <div id='card-content'>
        <div id='card-title'>{title}<hr></hr></div>
        <div id='card-text'>{text}</div>
    <div>
        <CardButton onClick={() => {Router.push({buttonid})}}/>
    </div>
    <div id='white-space'></div>
    </div>
</div>

InfoCard.defaultProps = {
    category: "Category",
    title: "What is it?",
    text: "Wildfires are fires that are out of control and burn in the wildland vegetation. They can burn forests, savannas, grasslands, and many other ecosystems. Wildfires can start from either natural occurrence or by humans. For instance, a natural occurrence would be a lightning strike, and a human cause could be from making a spark. Wildfires are most prone to start when the ecosystem is dry. This is why areas where it does not rain often are most likely to have wildfires. Sometimes wildfires can be good for the ecosystems by killing bad diseases and insects that harm trees, but quite often wildfires spread fast and are very dangerous.",
    button: "",
}

export default InfoCard;