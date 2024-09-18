import React from 'react';
import './Home.css';
import Companies from '../../Components/Companies';
import WhatWeDo from '../../Components/WhatWeDo';
import Quote from '../../Components/Quote';


const Home = () => {

    return (
        <div className='home'>
            <Companies/>
            <WhatWeDo/>
            <Quote/>
        </div>
    );
};

export default Home;
