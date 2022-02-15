import React from 'react'
import PropTypes from 'prop-types'

import TagsList from '../../../components/TagsList/TagsList'

import styles from './styles.module.css'

function ShortArticle({
  headerText,
  text,
  src,
  tagsArray,
}) {
  return (
    <div className={styles.article}>
      <div className={styles.mainContent}>
        <img
          src={src}
          alt='article_preview'
          className={styles.articleImg}
        />
        <div className={styles.articleText}>
          <h3>{headerText}</h3>
          <p>{text}</p>
        </div>
      </div>
      <TagsList tagsArray={tagsArray} />
    </div>
  )
}

ShortArticle.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  tagsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ShortArticle
