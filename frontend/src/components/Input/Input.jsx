import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Input({
  id,
  placeholder,
  value,
  className,
  onChange,
  type,
  name,
  ...rest
}) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      className={`${styles.input} ${className}`}
      onChange={onChange}
      {...rest}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  id: undefined,
  value: undefined,
  type: undefined,
  className: undefined,
  name: undefined,
  onChange: null,
}
export default Input
