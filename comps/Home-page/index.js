import React from 'react';
import './home-page.css';

const logoImg = require('./earth-hero-logo-vertical.svg');

const HomePage = () => <div id='home-page'>
    <span id='hamburger' className="material-icons">
            menu
            </span>
            {/* <div>
                {{uri:"https://fonts.googleapis.com/icon?family=Material+Icons"}}
            </div> */}
    
     <div id='content'>
        <img src={logoImg} />
        
        <p className='intro-text'>Hi, Earth Hero!</p>
        <p className='intro-text'>Let's get started on making a change and saving our planet!</p>
    </div>

        <div id='get-started'>
            <div className='green-button'>Get Started</div>
            </div>

</div>

export default HomePage;