
import React from 'react';
import './dropdown.css';

const DropButton = ({text, onClick}) => <div onClick={onClick} id='drop-button'>
    <div className='text'>
        <div className='button'>{text}</div>
    </div>
</div>

function DropClick(){
    alert("Default function");
}

DropButton.defaultProps = {
    text:'Default Text',
    onClick:DropClick
}

export default DropButton;