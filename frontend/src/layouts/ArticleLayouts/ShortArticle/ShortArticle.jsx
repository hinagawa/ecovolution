import React from 'react'
import PropTypes from 'prop-types'

import { HeartOutlined } from '@ant-design/icons'

import Link from '../../../components/Link/Link'
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
          <div className={styles.textGroup}>
            <div className={styles.articleHeader}>
              <Link href='/'>{headerText}</Link>
              <HeartOutlined />
            </div>
            <p>{text}</p>
          </div>
          <TagsList tagsArray={tagsArray} />
        </div>
      </div>
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
