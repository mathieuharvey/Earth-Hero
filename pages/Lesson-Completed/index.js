import React from 'react';
import './lessoncompleted.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import GreenButton from '../../comps/Green-button';
import Link from 'next/link';

import {data, ChangeData} from '../../data';

var CardsStack = require('../../images/cards-stack.svg');

const LessonCompleted = () => {
    var category = "";
    if(data.subcategory === "wildfireslesson"){
        category = "wildfires";
    }else if(data.subcategory === "watershortagelesson"){
        category = "water shortage";
    }else if(data.subcategory === "faminelesson"){
        category = "famine";
    }else if(data.subcategory === "wildlifelesson"){
        category = "wildlife affected by global warming";
    }else if(data.subcategory === "icebergmeltinglesson"){
        category = "iceberg melting";
    }else if(data.subcategory === "citieslesson"){
        category = "cities affected by global warming";
    }else if(data.subcategory === "carbonfootprintlesson"){
        category = "carbon footprints";
    }else if(data.subcategory === "acidrainlesson"){
        category = "acid rain";
    }else if(data.subcategory === "respiratoryproblemslesson"){
        category = "respiratory problems from pollution";
    }else if(data.subcategory === "marinelifelesson"){
        category = "marine life";
    }else if(data.subcategory === "eutrophicationlesson"){
        category = "eutrophication";
    }else if(data.subcategory === "drinkingwaterlesson"){
        category = "drinking water affected by pollution";
    }else if(data.subcategory === "pollutioncitieslesson"){
        category = "cities affected by pollution";
    }else if(data.subcategory === "pollutionwildlifelesson"){
        category = "wildlife affected by pollution";
    }



    return <div>
        <Icon />
    <div id='lesson-completed'>
        <div id='take-quiz-text'> 
            <p>Great! You know a lot more about {category} now. <br /> Ready to take the Quiz?</p>
        </div>
        <Link href='/Quiz1'><div id='take-quiz'>
            <GreenButton onClick={Nothing} text='Take the Quiz'/>
        </div></Link>
        <img src={CardsStack} id='cards-stack'/>
    </div>
    <Menu />
    </div>
}
function Nothing(){
    
}
export default LessonCompleted;