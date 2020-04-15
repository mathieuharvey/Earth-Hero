import React from 'react';
import './choose-subcategory.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';

const ChooseSubCategory = () => <div id='choose-subcategory'>
    <div id='flex-icons'>
        <div><Icon /></div>
        <div id='header-container'>
        <p id='header'>Select a subcategory.</p>
    </div>

<div id='container' onClick={ToggleDrought}>
    <div className='drop-down'>
        <p id='droughts'>Droughts</p>
        <span id='down-arrow' class="material-icons">
            keyboard_arrow_down
        </span>

    </div>
</div>

<div id='drought-options'>
        <div id='choice'>
            <div className='circle'></div>
            <p id='wildfires'>Wildfires</p>
        </div>

        
        <div id='choice'>
            <div className='circle'></div>
            <p id='wildfires'>Water Shortage</p>
        </div>
    

    
        <div id='choice'>
            <div className='circle'></div>
            <p id='wildfires'>Famine</p>
        </div>
   

   
        <div id='choice'>
            <div className='circle'></div>
            <p id='wildfires'>Wildlife</p>
        </div>
    
    </div>
    

<div id='container2' onClick={ToggleFlood}>
    <div className='drop-down'>
        <p id='droughts'>Floods</p>
        <span id='down-arrow2' class="material-icons">
            keyboard_arrow_down
        </span>
    </div>
</div>

{/* floods */}
<div id='flood-options'>
        <div id='choice'>
            <div className='circle'></div>
            <p id='wildfires'>Iceberg Melting</p>
        </div>

        <div id='choice'>
            <div className='circle'></div>
            <p id='wildfires'>Cities</p>
        </div>
   
    
    </div>
    
    {/* end of floods */}



<div id='Button-text'>
        <div id='button'>Next</div>
    </div>



        <div><Menu /></div>
    </div>

</div>

var drought_state = false;

function ToggleDrought(){
    if(drought_state === false){
    document.querySelector("#down-arrow").style.transform = 'rotate(180deg)';
    document.querySelector("#drought-options").style.display = 'block';
    drought_state = true;
    }else if(drought_state === true){
        document.querySelector("#down-arrow").style.transform = 'rotate(0deg)';
        document.querySelector("#drought-options").style.display = 'none';
        drought_state = false;
    }
}

var flood_state = false;
function ToggleFlood(){
    if(flood_state === false){
        document.querySelector("#down-arrow2").style.transform = 'rotate(180deg)';
        document.querySelector("#flood-options").style.display = 'block';
        flood_state = true;
        }else if(flood_state === true){
            document.querySelector("#down-arrow2").style.transform = 'rotate(0deg)';
            document.querySelector("#flood-options").style.display = 'none';
            flood_state = false;
        }
}





export default ChooseSubCategory;