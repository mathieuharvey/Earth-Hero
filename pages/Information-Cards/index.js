import React, { useState } from 'react';
import './information.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';

const Cards = () => { 
    const [button, setButton] = useState("Got it!");

return <div>
    <Icon />
    <div id="next-button" onClick={() => {
        setButton("Next");
        document.getElementById('card-button').style.width = "90px";}}>
            <InfoCard button={button}/>
    </div>
    <Menu />
</div>
}


export default Cards;
