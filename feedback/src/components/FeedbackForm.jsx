import React from 'react'
import Card from './shared/Card'
import { useState, useContext , useEffect} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMsg] = useState('')
    const {addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    useEffect(()=> {
     if(feedbackEdit.edit === true){
        setbtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
     }
    }, [feedbackEdit])
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
    const handleSubmit= (e)=> {
        e.preventDefault()
        if(text.trim().length >10) {
            const newFeedback = {
                text, 
                rating
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else {
                addFeedback(newFeedback)
            }
           setText('')
        }

    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}></RatingSelect>
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
