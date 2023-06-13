import React from 'react'
import { useState } from 'react'
function FeedbcakItem() {
    //to use useState we create a variabel above the return containes an array whith the state and the method that updates it
    //useState('the default settings")
    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is an exemple of feebdack item")
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">
       {text}
      </div>
    </div>
  )
}

export default FeedbcakItem
