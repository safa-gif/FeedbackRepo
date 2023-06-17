import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          This is a react app to leave fedback for a product or a service.
        </p>

        <p>Versin: 1.0.0</p>
        <p>
          <Link to='/'>Going back home</Link>
         </p>
      </div>
    </Card>
  )
}

export default AboutPage
