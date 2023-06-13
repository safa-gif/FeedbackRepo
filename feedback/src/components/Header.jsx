import React from 'react'
import PropTypes from 'prop-types'

//we use propos in the brackets of the component
function Header({text, bgColor, textColor}) {
  const headerStyles ={
    color: textColor,
    backgroundColor: bgColor,
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
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