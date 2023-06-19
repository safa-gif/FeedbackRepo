import { createContext , useState, useEffect} from "react";
// import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState(
        [
            // We noo longer need this static data we're fetching it from the JSON Server
            // {
            //     id: 1,
            //     text: "This is a feedback that is coming from the feedbackContext",
            //     rating: 10
            // },
            // {
            //     id: 2,
            //     text: "This is the second feedback that is com ing from the feedbackContext",
            //     rating: 9
            // },
            // {
            //     id: 3,
            //     text: "This is the third feedback that is coming from the feedbackContext",
            //     rating: 8
            // }
        ]
    )
    useEffect(()=> {
        fetchFeedback()
    },[])

    // Fetch feedback with an async method
    const fetchFeedback = async () => {
        // waiting for data to be loaded from the Json-Server
        // Applying a sorting to the data by id and ordering it
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //  Deleting Feedback
    const deleteFeedback = async (id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            }
            )

           // a high load rate method that you call on an array, it loops it through based on a condition to filter something out. 
           setFeedback(feedback.filter((item)=>(
              //The will return the array - the item we are deleting
              item.id !== id
           )))
        }
       }

       // Editing  a feedback
       const modifyFeedback = (item) => {
        setFeedbackEdit({item, edit: true })
        }

         
        // Adding a feedback 
        const addFeedback = async (newFeedback)=> {
            // Adding data from the input form 
            const response = await fetch('/feedback',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFeedback)
            })

            // creating a new id for feedback we, no longer need it 
            // newFeedback.id = uuidv4();
            // setting an array with the current feedbacks and the new feedback 
           const data = await response.json()
            setFeedback([data, ...feedback])
          }
          // update feedback item
          const updateFeedback= async (id, updItem) =>{
            const response = await fetch(`/feedback/${id}`, {
                method: 'PUT',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updItem)
            })
            const data = await response.json()
            setFeedback(feedback.map((item)=> item.id === id ? { ...item, 
                ...data
            }: item))

          }
    return <FeedbackContext.Provider value={{
        feedback: feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        modifyFeedback,
        addFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext