import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Form({
  children,
  className,
  onSubmit,
}) {
  return (
    <form
      className={`${styles.container} ${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

Form.defaultProps = {
  className: '',
}
export default Form
