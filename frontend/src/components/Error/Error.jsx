import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Error({ message }) {
  return <p className={styles.error}>{message}</p>
}

Error.propTypes = { message: PropTypes.string.isRequired }
export default Error
