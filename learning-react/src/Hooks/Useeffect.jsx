import React,{useEffect, useState} from 'react'

 function UseEffec() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
      setTimeout(() => {
        setCount(count=>count+1)
        
      }, 2000);
    },[])//or[count]

  return (
    <div>
        <h1>i hav render {count} times</h1>
      
    </div>
  )
}

export default UseEffec
