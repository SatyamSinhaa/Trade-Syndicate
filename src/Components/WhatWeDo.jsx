import React from 'react';
import '../Pages/Home/Home.css';
import vdo1 from '../assets/Exports.mp4'
import vdo2 from '../assets/Imports.mp4'
import vdo3 from '../assets/prefabs.mp4'
import vdo4 from '../assets/Hospitolity.mp4'
import { LuArrowRight } from "react-icons/lu";

const WhatWeDo = () => {
  return (
    <div>
        <h1>WHAT WE DO</h1>
            <div className="video">
                <div className="vd">
                    <video src={vdo1} muted autoPlay loop />
                    <h3>Exports</h3>
                    <a href="#"><span>Know more</span><span className='btn'><LuArrowRight /></span></a>
                </div>
                <div className="vd">
                    <video src={vdo2} muted autoPlay loop />
                    <h3>Imports</h3>
                    <a href="#"><span>Know more</span><span className='btn'><LuArrowRight /></span></a>
                </div>
                <div className="vd">
                    <video src={vdo3} muted autoPlay loop />
                    <h3>Prefabs</h3>
                    <a href="#"><span>Know more</span><span className='btn'><LuArrowRight /></span></a>
                </div>
                <div className="vd">
                    <video src={vdo4} muted autoPlay loop />
                    <h3>Hospitolity</h3>
                    <a href="#"><span>Know more</span><span className='btn'><LuArrowRight /></span></a>
                </div>
            </div>
    </div>
  )
}

export default WhatWeDo