import React from 'react';
import './icon.css';
import Link from 'next/link';

const iconImg = require('../../images/favicon.png');

const Icon = () => <div>
    <div id='icons'>
        <Link href='/Home-page'><img id='globe' src={iconImg} /></Link>
        </div>

</div>


export default Icon;