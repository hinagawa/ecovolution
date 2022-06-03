import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

function Button({ children, variant, shape, onClick }) {
  const resStyle = classNames({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.link]: variant === 'link',
    [styles.circleShape]: shape === 'circle',
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
  shape: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  variant: 'primary',
  shape: null,
  onClick: null,
}

export default Button
