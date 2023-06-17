import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
function FeedbackList({feedback, handleDelete, handleModify}) {
    //conditioning the output based on the existance or the length of the feedback
   if(!feedback || feedback.length === 0){
    return <p>There is no feedback yet</p>;
   }
    return (

    <div className='feedback-list'>
        {/* mapping the props pf feedback */}
        <AnimatePresence>
         
        {feedback.map((item)=>(
           <motion.div key={item.id} initial={{opacity:0}}
           animate={{opacity:1}} exit={{opacity:0}}>
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} handleModify={handleModify}>
        </FeedbackItem>
        {/* <div>{item.rating}</div> */} </motion.div>
        
      ))}
        </AnimatePresence>
      
    </div>
  )




   // No Animation Version
  // return (

  //   <div className='feedback-list'>
  //       {/* mapping the props pf feedback */}
  //     {feedback.map((item)=>(
  //       <>
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}>
  //       </FeedbackItem>
  //       {/* <div>{item.rating}</div> */}
  //       </>
  //     ))}
  //   </div>
  // )
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
