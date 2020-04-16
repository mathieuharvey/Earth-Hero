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
        {/* <div id='choice'> */}
        <label className='container'>Wildfires
            <input type='radio' name='radio' className='circle' />
                {/* <div id='selected-wildfires'></div> */}
            <span className='checkmark'></span>
            {/* <p onClick={SelectWildfires} id='wildfires'>Wildfires</p> */}
            </label>
        {/* </div> */}

        <label className='container'>Water Shortage
            <input type='radio' name='radio' />
            <span className='checkmark'></span>
        </label>


        <label className='container'>Famine
            <input type='radio' name='radio' />
            <span className='checkmark'></span>
        </label>


        <label className='container'>Wildlife
            <input type='radio' name='radio' />
            <span className='checkmark'></span>
        </label>
        
        {/* <div id='choice'>
            <div onClick={SelectWaterShortage} className='circle'>
                <div id='selected-watershortage'></div>
            </div>
            <p  onClick={SelectWaterShortage} id='wildfires'>Water Shortage</p>
        </div>
    

    
        <div id='choice'>
            <div onClick={SelectFamine}className='circle'>
            <div id='selected-famine'></div>
            </div>
            <p onClick={SelectFamine} id='wildfires'>Famine</p>
        </div> */}
   

   
        {/* <div id='choice'>
            <div className='circle'></div>
            <p id='wildfires'>Wildlife</p>
        </div> */}
    
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


// toggle drought and flood state drop downs
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
//end of drop downs



//selecting a category toggle

// var wildfires_state = false;
// var watershortage_state = false;
// var famine_state = false;
// function SelectWildfires(){
//     if(wildfires_state === false){
//         // document.querySelector("#selected").style.width = "16px";
//         // document.querySelector("#selected").style.height = "16px";
//         // document.querySelector("#selected").style.display = "block";
//         document.querySelector("#selected-wildfires").style.opacity = "1";
//         document.querySelector("#selected-watershortage").style.opacity = "0";
//         document.querySelector("#selected-famine").style.opacity = "0";
//         wildfires_state = true;
//     }else if(watershortage_state === true){
//         document.querySelector("#selected-watershortage").style.opacity = '0';
//         document.querySelector("#selected-wildfires").style.opacity = "1";
//         document.querySelector("#selected-famine").style.opacity = "0";
//         watershortage_state === false;
//     }else if(famine_state === true){
//         document.querySelector("#selected-watershortage").style.opacity = '0';
//         document.querySelector("#selected-wildfires").style.opacity = "0";
//         document.querySelector("#selected-famine").style.opacity = "1";
//         famine_state = false;
//     }
// }
// function SelectWaterShortage(){
//     if(watershortage_state === false){
//         document.querySelector("#selected-watershortage").style.opacity = "1";
//         document.querySelector("#selected-wildfires").style.opacity = "0";
//         document.querySelector("#selected-famine").style.opacity = "0";
//         watershortage_state = true;
//     }else if(wildfires_state === true){
//         document.querySelector("#selected-watershortage").style.opacity = "1";
//         document.querySelector("#selected-wildfires").style.opacity = "0";
//         document.querySelector("#selected-famine").style.opacity = "1";
//         wildfires_state = false;
//     }else if(famine_state === true){
//         document.querySelector("#selected-watershortage").style.opacity = '1';
//         document.querySelector("#selected-wildfires").style.opacity = "1";
//         document.querySelector("#selected-famine").style.opacity = "0";
//         famine_state = false;
//     }
// }
// function SelectFamine(){
//     if(famine_state === false){
//         document.querySelector("#selected-watershortage").style.opacity = "0";
//         document.querySelector("#selected-wildfires").style.opacity = "0";
//         document.querySelector("#selected-famine").style.opacity = "1";
//         famine_state = true;
//     }else if(wildfires_state === true){
//         document.querySelector("#selected-watershortage").style.opacity = "1";
//         document.querySelector("#selected-wildfires").style.opacity = "0";
//         document.querySelector("#selected-famine").style.opacity = "0";
//         wildfires_state = false;
// }else if(watershortage_state === true){
//     document.querySelector("#selected-watershortage").style.opacity = '0';
//     document.querySelector("#selected-wildfires").style.opacity = "1";
//     document.querySelector("#selected-famine").style.opacity = "0";
//     watershortage_state === false;
// }
// }



export default ChooseSubCategory;