import React from 'react';
import '../Pages/Home/Home.css'
import img8 from '../assets/pexels-photo-1612351.jpeg';

const Quote = () => {
    return (
        <div>
            <h1>Let's Build Something Creative Together</h1>
            <div className="about">
                <div className="about-data">
                    <p>One of India's biggest industrial engineering company, Trade Syndicate Group conveys consistent handling answers for the leaders of heavy industries. The core business of Trade Syndicate is, Manufacturing of Shelters, Skids, High Pressure Pumps and Assembling of Membranes & LPH Systems, Iron & Steel Sections, Sheets, Cold & Hot Roll Coils etc. sourced directly from rolling mills and strip mills and supplies to its clients.</p><br />
                    <p>All Projects of tradesyndicate are managed by our highly talented experts. Our dynamic and flexible group has the knowledge, ability and devotion to convey the correct outcome, without fail. Tradesyndicate holds its key organizations globally with regards to enabling powerful and integrated solutions.</p>
                </div>
                <div className="about-image">
                    <img src={img8} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Quote