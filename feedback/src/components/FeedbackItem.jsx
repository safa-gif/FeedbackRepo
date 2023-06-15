import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes} from 'react-icons/fa'

//We no longer need to useState for the rating and the feedback 
// Definig an arrow function to handle deleting the feedback

// We are receiving the data from the props : item
function FeedbackItem({item, handleDelete}) {
    //to use useState we create a variabel above the return containes an array whith the state and the method that updates it
    //useState('the default settings")
    
  return (
    // if in the card component reverse={true} than the styling changes into the reverse else it is the default styling
    <Card>
      <div className="num-display">{item.rating}</div>
      We are passing handleDelete as a props into FeedbackItem, we are catching it and calling on the click
      <button onClick={()=> handleDelete(item.id)} className='close'>
        <FaTimes color='puple'></FaTimes>
        
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
// We are setting the type of the object
FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired
}


export default FeedbackItem
