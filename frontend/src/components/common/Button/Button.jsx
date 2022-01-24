import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Button({
  text,
  variant,
  onClick,
  onSubmit,
}) {
  return (
    <button
      type={onSubmit ? 'submit' : 'button'}
      className={styles[variant]}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'link']),
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
}

Button.defaultProps = {
  variant: 'primary',
  onSubmit: null,
}

export default Button
