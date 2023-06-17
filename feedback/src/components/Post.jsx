import React from 'react'
// import {useParams} from "react-router-dom"
import Card from './shared/Card'
import {Navigate} from 'react-router-dom'
function Post() {
    // const params = useParams()
    const status = 404
    if(status === 404) {
     return <Navigate  to='/notfound'></Navigate> 
    }
  return (
    <Card>
        <h1>Post : </h1>
     {/* <h1>
     Post number  {params.id}
     </h1>
      <p>Name : {params.name}</p> */}
    </Card>
  )
}

export default Post
