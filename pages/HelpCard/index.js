import React, { useState } from 'react';
import './help.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';
import Router from 'next/router';

import {data, ChangeData} from '../../data';

var CardSideImgLeft = require('../../images/card-left.svg');
var checkmarkIcon = require('../../images/checkmark.svg');
var wildfires3 = require('../../images/wildfire_3.png');

const HelpCard = () => {
    var text = "";
    var category = "";
    var help1 = "";
    var help2 = "";
    var help3 = "";
    var help4 = "";
    if(data.subcategory === "wildfires"){
        category = "Wildfires";
        text = "There are many ways you can help prevent wildfires from starting and keeping our environment safe:";
        help1= "1. Never leave a fire unattended. Always make sure any fires you use are afterwards completely distinguished.";
        help2= "2. Do not throw away any matches, cigarettes, or other smoking materials onto any part of the ground outside.";
        help3 = "3. Only start campfires in an appropriate fire pit and ensure your surroundings are safe.";
        help4 = "4. If it's windy out, don't start a fire!";
        ChangeLessonComplete("wildfireslesson");
    }else if(data.subcategory === "watershortage"){
        category = "Water Shortage";
        text = "Despite this issue affecting so many countries globally, there are some small things you can do to make a difference:";
        help1 = "1. Give clean water to families in need.";
        help2 = "2. Raise awareness! Tell your family, friends, or spread the word online.";
        help3 = "3. Donate to charities that support helping to bring clean water around the world.";
        help4 = "4. Conserve water by taking shorter showers and never leaving the sink running";
        ChangeLessonComplete("watershortagelesson");
    }else if(data.subcategory === "famine"){
        category = "Famine";
        text = "There’s always something you can do to help the people who are hungry:";
        help1 = "1. Donate to charities that support helping people in famines.";
        help2 = "2. Donate food for those who need it.";
        help3 = "3. Spread the word! Tell people you know about the issue and encourage others to donate.";
        ChangeLessonComplete("faminelesson");
    }else if(data.subcategory === "wildlife"){
        category = "Wildlife";
        text = "There are definitely some ways you can help save the wildlife from droughts!";
        help1 = "1. Cut down on the amount of water you use.";
        help2 = "2. Spread the word and encourage others to conserve water.";
        ChangeLessonComplete("wildlifelesson");
    }else if(data.subcategory === "icebergmelting"){
        category = "Iceberg Melting";
        text = "The main way you can help prevent iceberg melting and global warming is to cut back on producing pollution by trying to do the following:";
        help1 = "1. Bike or walk to school or work and avoid using a car when you can.";
        help2 = "2. Use public transit as much as possible.";
        help3 = "3. Always recycle!";
        ChangeLessonComplete("icebergmeltinglesson");
    }else if(data.subcategory === "cities"){
        category = "Cities";
        text = "Here’s a few simple things you can do to help prevent flooding in your area:";
        help1 = "1. Keep leaves and other debris out of outdoor drains.";
        help2 = "2. Ensure your gutters are not clogged";
        ChangeLessonComplete("citieslesson");
    }else if(data.subcategory === "carbonfootprint"){
        category = "Carbon Footprint";
        text = "Here’s some simple habits and things to do that you can add to your daily life to reduce your carbon footprint:";
        help1 = "1. Take public transit rather than always using a car.";
        help2 = "2. Recycle and use a compost bucket.";
        help3 = "3. Use energy-efficient appliances.";
        ChangeLessonComplete("carbonfootprintlesson");
    }else if(data.subcategory === "acidrain"){
        category = "Acid Rain";
        text = "The primary way to help the issue of acid rain is to reduce air pollution. Here are some ways you can reduce the amount of pollution you produce:";
        help1 = "1. Take public transit whenever possible.";
        help2 = "2. Conserve energy. Turn off lights that aren’t being used and don’t keep electronic equipment turned on if they aren’t being used.";
        ChangeLessonComplete("acidrainlesson");
    }else if(data.subcategory === "respiratoryproblems"){
        category = "Respiratory Problems";
        text = "There’s a few things you can to do protect yourself from the dangers of severe air pollution:";
        help1 = "1. If you live in an extremely polluted area, limit your time outdoors.";
        help2 = "2. Check your local air quality report and adjust your daily activity according to the report.";
        help3 = "3. Use a mask if necessary and if you are in an area with very polluted air.";
        ChangeLessonComplete("respiratoryproblemslesson");
    }else if(data.subcategory === "marinelife"){
        category = "Marine Life";
        text = "Here’s some ways you can help keep the ocean clean and save the marine life:";
        help1 = "1. Reduce your use of plastic, especially single-use plastic.";
        help2 = "2. Take some time to clean up any litter you see.";
        help3 = "3. Make an effort to use eco-friendly products and containers to limit the amount of garbage you produce.";
        ChangeLessonComplete("marinelifelesson");
    }else if(data.subcategory === "eutrophication"){
        category = "Eutrophication";
        text = "There are a few small things you can do to make a difference and help stop eutrophication:";
        help1 = "1. Use a compost bin for food waste.";
        help2 = "2. Reduce air pollution by taking public transit and going green.";
        ChangeLessonComplete("eutrophicationlesson");
    }else if(data.subcategory === "drinkingwater"){
        category = "Drinking Water";
        text = "Here are some ways you can help keep our water clean from pollution:";
        help1 = "1. Reduce your use of water. Keep the amount of water waste you produce down by taking shorter showers and never keeping the sink running.";
        help2 = "2. Properly dispose of any harmful chemicals you use; don’t just dump everything down the sink!";
        help3 = "3. Avoid using chemicals to clean. Use something more natural instead such as baking soda or vinegar.";
        ChangeLessonComplete("drinkingwaterlesson");
    }else if(data.subcategory === "pollutioncities"){
        category = "Cities";
        text = "There are some helpful things you could do to save lives and help out the polluted cities:";
        help1 = "1. Bike or walk as much as you can anytime you go somewhere and limit the amount of times you drive in a car.";
        help2 = "2. Always pick up your garbage and dispose of it properly.";
        help3 = "3. Use eco-friendly products.";
        ChangeLessonComplete("pollutioncitieslesson");
    }else if(data.subcategory === "pollutionwildlife"){
        category = "Wildlife";
        text = "Here are some ways you can help reduce pollution to help out the wildlife:";
        help1 = "1. Don’t litter! Always pick up your garbage and dispose of it properly.";
        help2 = "2. Bike or walk to school or work.";
        help3 = "3. Stay green! Always recycle or compost and use reusable dishes and containers.";
        ChangeLessonComplete("pollutionwildlifelesson");
    }




    const [shape, setShape] = useState();

    return <div id="helpcard" onLoad={() => {
        setShape();
        document.getElementById('card-button').style.width = "40px";
        document.getElementById('next-icon').style.margin = "5px";
        document.getElementById('next-icon').src = checkmarkIcon;
    }}> 
        <Icon />
        <InfoCard 
            category= {category}
            title= "What can I do to help?"
            text= {text}
            help1= {help1}
            help2= {help2}
            help3= {help3}
            help4= {help4}
            buttonid='/Lesson-Completed'
        />
        <Menu />
        <img id='card-side-left' src={CardSideImgLeft} onClick={() => {Router.push('/ProblemCard')}}/>
        <img id='wildfires-3' src={wildfires3}/>
    </div>

}

function ChangeLessonComplete(name){
    data.lessons = name;
    ChangeData(data);
}

export default HelpCard;