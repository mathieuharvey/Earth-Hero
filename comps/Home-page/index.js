import React from 'react';
import './home-page.css';

// import imageFile from './images/pollution.png';

const HomePage = () => <div id='home-page'>
    <span id='hamburger' className="material-icons">
            menu
            </span>
    
     <div id='content'>
        <img src='../images/earth-hero-logo-horizontale.svg'></img>
        
        <p className='intro-text'>Hi, Earth Hero!</p>
        <p className='intro-text'>Let's get started on making a change and saving our planet!</p>
    </div>

        <div id='get-started'>
            <div className='green-button'>Get Started</div>
            </div>

</div>

export default HomePage;