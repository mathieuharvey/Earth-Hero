import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './dropdown.css';

const DropButton = ({text, props, onClick}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );  
}

function DropClick(){
    alert("Default function");
}

DropButton.defaultProps = {
    text:'Default Text',
    onClick:DropClick
}

export default DropButton;


//<div onClick={onClick} id='green-button'>
//</div>

//    {/* <div className='text'>   <div className='drop-button'>{text}</div>   </div> */}
