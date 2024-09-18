import React, { useState } from 'react'
import './Navbar.css'
import { LuAlignRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setActive(!active)
  }


  const handleColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', handleColor)

  return (
    <nav className={color ? 'color' : ''}>
      <div className="logo">

      </div>
      <div className={active ? 'menu active' : 'menu'}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="burger" onClick={handleClick}>
        {
          active ? <IoMdClose size={25} /> : <LuAlignRight size={25}/>
        }
      </div>
    </nav>
  )
}

export default Navbar