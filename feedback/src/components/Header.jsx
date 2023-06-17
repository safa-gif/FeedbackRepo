import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//we use propos in the brackets of the component
function Header({text, bgColor, textColor}) {
  const headerStyles ={
    color: textColor,
    backgroundColor: bgColor,
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <Link style={{textDecoration: 'none', color: "rgb(255, 106, 149)"}} to="/"><h2>{text}</h2></Link>
      </div>
    </header>
  )
}
//setting default properties
Header.defaultProps =
{
    text: "Feedback UI",
    bgColor: "rgba(0,0,0, 0.4)",
    textColor: "#ff6a95",

}
//We can ste the type of the properties
Header.propTypes = 
{
    text: PropTypes.string,
    bgColor:  PropTypes.string,
    textColor:  PropTypes.string,
}

export default Header