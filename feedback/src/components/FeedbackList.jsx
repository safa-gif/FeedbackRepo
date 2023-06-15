import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

function FeedbackList({feedback}) {
    //conditioning the output based on the existance or the length of the feedback
   if(!feedback || feedback.length === 0){
    return <p>There is no feedback yet</p>;
   }
  return (

    <div className='feedback-list'>
        {/* mapping the props pf feedback */}
      {feedback.map((item)=>(
        <>
        <FeedbackItem key={item.id} item={item}>
        </FeedbackItem>
        {/* <div>{item.rating}</div> */}
        </>
      ))}
    </div>
  )
}

// We are setting the type of feedback props:
FeedbackList.propTypes = {
    feedback : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
