import React from 'react'
import PropTypes from 'prop-types'

import './styles.module.css'

function Link({ text, href }) {
  return <a href={href}>{text}</a>
}

export default Link

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
