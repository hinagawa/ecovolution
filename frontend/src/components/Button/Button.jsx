import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

function Button({ children, variant, onClick }) {
  const resStyle = classNames({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.link]: variant === 'link',
  })
  return (
    <button
      type={onClick ? 'button' : 'submit'}
      className={resStyle}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'link']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  variant: 'primary',
  onClick: null,
}

export default Button
