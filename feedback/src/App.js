import Header from './components/Header'
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
import {FeedbackProvider} from './context/FeedbackContext'
function App() {
  


 return (
  <FeedbackProvider>
      <Router>
    <Header/>
    <div className='container'>
      <Routes>
      <Route exact path="/" element={
        <>
        <FeedbackForm></FeedbackForm>
        <FeedbackStats></FeedbackStats>
        <FeedbackList/>
        </>
      }>
     
      </Route>
      <Route path='/about' element={<AboutPage/>} />
      {/* passing params in routing  */}
      {/* to make inbedded routes work */}
      <Route path='/post/*' element={<Post/>} />
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
 
  </FeedbackProvider>
  
   )
}

export default App
