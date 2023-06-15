import React from 'react'
import Header from './components/Header'
// import FeedbcakItem from './components/FeedbcakItem'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
function App() {
 const [feedback, setFeedback] = useState(FeedbackData)
 const deleteFeedback = (id)=>{
   if(window.confirm('Are you sure you want to delete?')){
      // a high loader rate method that you call on an array, it loops it through based on a condition to filter something out. 
      setFeedback(feedback.filter((item)=>(
         //The will return the array - the item we are deleting
         item.id !== id
      )))
   }
 }  
 return (
    <>

    <Header/>
    <div className='container'>
    <FeedbackStats feedback={feedback}></FeedbackStats>
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
   </div>
    </>
   )
}

export default App
