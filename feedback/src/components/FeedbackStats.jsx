import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
// import PropTypes from 'prop-types'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    // Calculate rating
    //reduce is a high order rate method which takes a function, it take an acculumator and the current value
    let  average = feedback.reduce((acc, cur)=>{
            return acc + cur.rating
            // this is the default for the accumulator
        }, 0) / feedback.length
    // Making sure the output is not a tralling number    
    average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'> 
     <h4>{feedback.length} Reviews </h4>
     <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
// We no longer need it because we are using Feedback Context
// FeedbackStats.prototypes = {
//     feedback : PropTypes.array.isRequired
// }
export default FeedbackStats
