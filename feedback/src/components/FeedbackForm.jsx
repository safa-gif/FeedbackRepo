import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMsg] = useState('')
    const handleTextChange = (e)=> {
        if(text === '')
        {
            setbtnDisabled(true)
            setMsg(null)
        }
        else if(text!== '' && text.trim().length <=10) {
           setMsg('Text must be at least 10 characters')
           setbtnDisabled(true)
        }
        else {
            setMsg(null)
            setbtnDisabled(false)
        }

        setText(e.target.value)
    }
  return (
    <Card>
        <form action="">
        <h2>How would you rate your service with us?</h2>
        <RatingSelect></RatingSelect>
        <div className='input-group'>
        <input onChange={handleTextChange}  type="text" placeholder='Write a review' value={text}/>
        <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
