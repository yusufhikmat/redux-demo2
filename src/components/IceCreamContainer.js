import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const IceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.numOfIceCream)
    const dispatch =  useDispatch()
  return (
    <div>
        <h2>Number of Ice cream - {numOfIceCream}</h2>
        <button onClick = {()=>dispatch()}>Buy Icecream</button>
    </div>
  )
}

export default IceCreamContainer