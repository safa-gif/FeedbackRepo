import { createContext , useState} from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(
        [
            {
                id: 1,
                text: "This is a feedback that is coming from the feedbackContext",
                rating: 10
            },
            {
                id: 2,
                text: "This is the second feedback that is coming from the feedbackContext",
                rating: 9
            },
            {
                id: 3,
                text: "This is the third feedback that is coming from the feedbackContext",
                rating: 8
            }
        ]
    )
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const deleteFeedback = (id)=>{
        if(window.confirm('Are you sure you want to delete?')){
           // a high load rate method that you call on an array, it loops it through based on a condition to filter something out. 
           setFeedback(feedback.filter((item)=>(
              //The will return the array - the item we are deleting
              item.id !== id
           )))
        }
       }
       //Editiin a feedback
       const modifyFeedback = (item) => {
        setFeedbackEdit({item, edit: true })
        }

        const addFeedback = (newFeedback)=> {
            // creating a new id for feedback
            newFeedback.id = uuidv4();
            // setting an array with the current feedbacks and the new feedback 
            setFeedback([newFeedback, ...feedback])
          }
          // update feedback item
          const updateFeedback=(id, updItem) =>{
            setFeedback(feedback.map((item)=> item.id === id ? { ...item, 
                ...updItem
            }: item))

          }
    return <FeedbackContext.Provider value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedback,
        modifyFeedback,
        addFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext