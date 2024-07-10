import React from 'react'
import { useState } from 'react'
 function UsHook() {
  const [count, setCount] = useState(0)
  const IncreaseFunc=()=>{
    setCount(count=>count+1)
    setCount(count=>count+1)
    setCount(count=>count+1)
    setCount(count=>count+1)

  }
  const [car,SetCar]=useState({
    brand:'Ferrari',
    price:111111,
  });
  const Product=()=>{
    // SetCar({
    //     brand:'bmw',
    //     price:55555,
    // })

    // or
    SetCar((prev)=>{
        return{
         ...prev,price:30000
        }
    })
    
    // use for prev or car 

  }

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={IncreaseFunc}>click me Count</button>
        <h2>My Car Name is {car.brand}</h2>
        <h3>This price is{car.price} </h3>
        <button onClick={Product}>Show me a Car</button>
      
    </div>
  )
}
export default UsHook
