import React, { useState } from 'react'

const Adviceapp = () => {
    const [advice,setadvice]=useState("Click the Button to get a Free Advice")
    const [count,setcount]=useState(0)
    async function getadvice(){
        const a=await fetch("https://api.adviceslip.com/advice")
        const b=await a.json()
       setadvice(b.slip.advice)
       setcount(count+1)
    }
    
  return (
    <div>
    <h3>{advice}</h3>
        <button onClick={getadvice}>Get Advice</button>
        <p>you have read <span>{count}</span> pieces of advice</p>
    </div>
)

}

export default Adviceapp