import React from 'react'
import PropTypes from 'prop-types'

function Select({ optionArray }) {
  return (
    <select>
      {optionArray.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  )
}

Select.propTypes = {
  optionArray: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
}

export default Select
