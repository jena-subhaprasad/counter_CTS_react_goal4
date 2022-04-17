import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[counter,setCounter]=useState(0);
    const[countbycent,setcountbycent]=useState(0);
    useEffect(()=>{
     if(countbycent===1000)
     {
         alert(`Reached the limit`)
     }
    },[countbycent])

  return (
      <>
    <div>
        <button onClick={()=>{setCounter(counter-5)}} className="btn" >-</button>
        <span className='text' >{counter}</span>
        <button onClick={()=>{setCounter(counter+5)}} className="btn"  >+</button>
    </div>
    <div>
        <button onClick={()=>{setcountbycent(countbycent-100)}}className="btn"  >-</button>
        <span className='text' >{countbycent}</span>
        <button onClick={()=>{setcountbycent(countbycent+100)}} className="btn"  >+</button>
    </div>
    </>
  )
}

export default Counter