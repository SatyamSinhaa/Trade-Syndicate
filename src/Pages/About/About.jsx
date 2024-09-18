import React, { useState } from 'react'

const About = () => {
const [count, setCount] = useState(0)

const handleIncrement =()=>{
    setCount(count+1)
}
const handleDecrement =()=>{
    if(count>0)
    setCount(count-1)
}

  return (
    <div style={{height:'100%',
        width:'100%',
        textAlign:'center',
        alignContent:'center'
    }}>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>--</button>
    </div>
  )
}

export default About