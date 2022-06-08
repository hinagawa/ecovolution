import React from 'react'
import PropTypes from 'prop-types'

import Label from '../Label/Label'

import styles from './styles.module.css'

function TagsList({ tagsArray }) {
  return (
    <div className={styles.tagsList}>
      <p>Теги:</p>
      {tagsArray.map((tag) => (
        <Label variant={tag} />
      ))}
    </div>
  )
}

TagsList.propTypes = {
  tagsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default TagsList
