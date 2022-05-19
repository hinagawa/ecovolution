import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Label({ variant }) {
  return (
    <span className={`${styles[variant]} ${styles.label}`}>
      {variant}
    </span>
  )
}

Label.propTypes = {
  variant: PropTypes.oneOf([
    'recipe',
    'tutorial',
    'places',
    'events',
    'lifehack',
  ]).isRequired,
}
export default Label
