import React from 'react'
import FeedbackItem from './FeedbackItem';
// import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';
function FeedbackList() {

    const {feedback, isLoading} = useContext(FeedbackContext)
    //conditioning the output based on the existance or the length of the feedback
   if(!isLoading && (!feedback || feedback.length === 0)){
    return <p>There is no feedback yet</p>;
   }
   return isLoading? <Spinner/> : (
    <div className='feedback-list'>
    {/* mapping the props pf feedback */}
    <AnimatePresence>
     
    {feedback.map((item)=>(
       <motion.div key={item.id} initial={{opacity:0}}
       animate={{opacity:1}} exit={{opacity:0}}>
        <FeedbackItem key={item.id} item={item} >
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

// We are setting the type of feedback props:, we no longer need it with feedbackContext
// FeedbackList.propTypes = {
//     feedback : PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList
