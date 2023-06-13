import React from 'react'

function App() {

  const title = "Blog Post"
  const body = "This is my blog content"
  // is an array of comments we want to displayed using a list
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'},
    {id: 4, text: 'Comment four'},
  ]
   return (
   <>
   <h1>{title.toUpperCase}</h1>
   <p>{body} </p>
  <div className="comments">
    <h3>
      {/* returns the length of the comments'array  */}
      Comments ({comments.length})
    </h3>
    <ul>
      {
      comments.map(
        // using arraow function inside the map
        (comment, index) => (
          // displaying the text
           <li key={comment.id}> {comment.text}</li>
      ))}
    </ul>
  </div>
   </>)
}

export default App
