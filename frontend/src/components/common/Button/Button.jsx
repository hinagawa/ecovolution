import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Button({ text, variant, onClick }) {
  return (
    <button
      type='button'
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
}

Button.defaultProps = {
  variant: 'primary',
}

export default Button
