import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
// I am just testing NavLink
// import Card from './components/shared/Card'
// import {NavLink } from 'react-router-dom'
import Post from './components/Post'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
 const [feedback, setFeedback] = useState(FeedbackData)
 const deleteFeedback = (id)=>{
   if(window.confirm('Are you sure you want to delete?')){
      // a high load rate method that you call on an array, it loops it through based on a condition to filter something out. 
      setFeedback(feedback.filter((item)=>(
         //The will return the array - the item we are deleting
         item.id !== id
      )))
   }
  }  
  const modifyFeedback = (feedbackChange) => {
    console.log(feedbackChange)
    }
 const addFeedback = (newFeedback)=> {
   // creating a new id for feedback
   newFeedback.id = uuidv4();
   // setting an array with the current feedbacks and the new feedback 
   setFeedback([newFeedback, ...feedback])
 }

 return (
    <Router>
    <Header/>
    <div className='container'>
      <Routes>
      <Route exact path="/" element={
        <>
        <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} handleModify={modifyFeedback}/>
        </>
      }>
     
      </Route>
      <Route path='/about' element={<AboutPage/>} />
      {/* passing params in routing  */}
      <Route path='/post/' element={<Post/>} />
      {/* <Route path='/post/:id/:name' element={<Post/>} /> */}
      </Routes>
      <AboutIconLink></AboutIconLink>
        {/* Truying to use Navlink */}
      {/* <Card>
        <NavLink to='/' activeClassName='active'>
        Home
        </NavLink>
      </Card> */}
   </div>
    </Router>
   )
}

export default App
