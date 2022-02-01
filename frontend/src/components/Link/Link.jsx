import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Link({ text, href }) {
  return (
    <a href={href} className={styles.link}>
      {text}
    </a>
  )
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default Link
