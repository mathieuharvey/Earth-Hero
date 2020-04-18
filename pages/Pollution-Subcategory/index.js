import React from 'react';
import './pollutionsubcategory.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';

const PollutionSubcategory = () => <div id='pollution-subcategory'>

<div id='flex-icons'>
        <div><Icon /></div>
        <div id='header-container'>
        <p id='header'>Select a subcategory.</p>
    </div>


{/* air */}
<div id='container' onClick={ToggleAir}>
    <div className='drop-down'>
        <p id='droughts'>Air</p>
        <span id='down-arrow' className="material-icons">
            keyboard_arrow_down
        </span>

    </div>
</div>

<div id='air-options'>

        <label  onClick={HighlightButton} className='container'>Carbon Footprint
            <input type='radio' name='radio' className='circle' />
            <span  onClick={HighlightButton} className='checkmark'></span>
            </label>
        

        <label  onClick={HighlightButton} className='container'>Acid Rain
            <input type='radio' name='radio' />
            <span  onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={HighlightButton} className='container'>Respiratory Problems
            <input type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>

    
    </div>

{/* end of air */}
    


{/* water */}
<div id='container2' onClick={ToggleWater}>
    <div className='drop-down'>
        <p id='droughts'>Water</p>
        <span id='down-arrow2' class="material-icons">
            keyboard_arrow_down
        </span>
    </div>
</div>

<div id='water-options'>
<label onClick={HighlightButton} className='container'>Marine Life
            <input type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={HighlightButton} className='container'>Eutrophication
            <input type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={HighlightButton} className='container'>Drinking Water
            <input type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>
    
    </div>
    
    {/* end of water */}



    {/* land */}
<div id='container2' onClick={ToggleLand}>
    <div className='drop-down'>
        <p id='droughts'>Land</p>
        <span id='down-arrow3' class="material-icons">
            keyboard_arrow_down
        </span>
    </div>
</div>

<div id='land-options'>
<label onClick={HighlightButton} className='container'>Cities
            <input type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={HighlightButton} className='container'>Wildlife
            <input type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>
    
    </div>
    
    {/* end of land */}



<div id='Button-text'>
        <div id='button'>Next</div>
    </div>



        <div><Menu /></div>
    </div>

</div>



// toggle drought and flood state drop downs
var air_state = false;

function ToggleAir(){
    if(air_state === false){
    document.querySelector("#down-arrow").style.transform = 'rotate(180deg)';
    document.querySelector("#air-options").style.display = 'block';
    air_state = true;
    }else if(air_state === true){
        document.querySelector("#down-arrow").style.transform = 'rotate(0deg)';
        document.querySelector("#air-options").style.display = 'none';
        air_state = false;
    }
}

var water_state = false;
function ToggleWater(){
    if(water_state === false){
        document.querySelector("#down-arrow2").style.transform = 'rotate(180deg)';
        document.querySelector("#water-options").style.display = 'block';
        water_state = true;
        }else if(water_state === true){
            document.querySelector("#down-arrow2").style.transform = 'rotate(0deg)';
            document.querySelector("#water-options").style.display = 'none';
            water_state = false;
        }
}

var land_state = false;
function ToggleLand(){
    if(land_state === false){
        document.querySelector("#down-arrow3").style.transform = 'rotate(180deg)';
        document.querySelector("#land-options").style.display = 'block';
        land_state = true;
        }else if(land_state === true){
            document.querySelector("#down-arrow3").style.transform = 'rotate(0deg)';
            document.querySelector("#land-options").style.display = 'none';
            land_state = false;
        }
}
//end of drop downs


function HighlightButton(){
    document.querySelector("#button").style.backgroundColor = '#46c75f';
}


export default PollutionSubcategory;