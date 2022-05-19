import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Link({ href, children }) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default Link
