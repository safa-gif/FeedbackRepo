import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'
import React from 'react'
// import {useParams} from "react-router-dom"
import Card from './shared/Card'
import Button from './shared/Button'
function Post() {
  const status = 200
  const navigate = useNavigate()
  const onClick = ()=> {
    // alert('You clicked me!');
    console.log("hello")
    navigate('/about')

  }    // const params = useParams()
    if(status === 404) {
     return <Navigate  to='/notfound'></Navigate> 
    }
  return (
    <Card>
        <h1>Post : </h1>
        <Button onClick={onClick}>Clik Me</Button>
        {/* When we have something we want to show on a specific route */}
        <Routes>
          <Route path="/show" element={<h1>Hello world!</h1>}></Route>
        </Routes>
     {/* <h1>
     Post number  {params.id}
     </h1>
      <p>Name : {params.name}</p> */}

    </Card>
  )
}

export default Post
