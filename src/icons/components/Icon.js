import React from 'react'
import PropTypes from 'prop-types'

function Icon (props) {
  const { size, color } = props
    return (
      <svg
      width={size} 
      height={size}
      fill={color}
      viewBox="0 0 32 32"
      >
        {props.children}
      </svg>
    )
}

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

export default Icon
