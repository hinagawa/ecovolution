import React from 'react'
import PropTypes from 'prop-types'

import './styles.modules.css'

function Checkbox({ text, onChange }) {
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        onChange={onChange}
      />
      <label
        htmlFor="checkbox"
      >
        {text}
      </label>
    </>
  )
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  onChange: null,
}
export default Checkbox
