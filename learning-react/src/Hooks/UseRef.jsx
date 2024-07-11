import React, { useEffect, useRef, useState } from 'react'

 function UseRef() {
   
    const inputElem=useRef();
   
    
    const btbClicked=()=>{
        console.log(inputElem.current);
        inputElem.current.style.background="blue";
    }
 ;

    
  return (
    <div>
    
      <input type="text" ref={inputElem} />
      <button onClick={btbClicked}>click Here</button>
    </div>
  )
}
export default UseRef
 

// const[Count,setCount]=useState(0)
// const count=useRef(0);
// const[value,setValue]=useState(0)
// useEffect(()=>{
//     count.current=count.current+1;
//   })

//   <button onClick={()=>(setValue(prev=>prev-1))}>Decrease</button>
//   <h1>{value}</h1>
//   <button onClick={()=>(setValue(prev=>prev+1))}>Increase</button>
//   <h2>Render Count:{count.current}</h2>