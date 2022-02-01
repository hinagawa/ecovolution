import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Input({
  id,
  placeholder,
  value,
  className,
  onChange,
}) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      className={`${styles.input} ${className}`}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  value: undefined,
  className: undefined,
  onChange: null,
}
export default Input
