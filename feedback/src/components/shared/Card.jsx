import React from 'react'
import PropTypes from 'prop-types'

// Passing the children of the card
function Card({children, reverse}) {
  return (
    // // We are using conditional class if the class card reversed is true than we are applying the style of reverse 
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
    // <div className="card" style={{backgroundColor:reverse ? "#000": "E966A0", color:reverse ? "E966A0": "#000"}}></div>

  )
}

// We are addind default props of the Card Component:
Card.defaultProps ={
    reverse : false,
}
Card.propTypes = {
 children: PropTypes.node.isRequired,
 reverse: PropTypes.bool,
}

export default Card
