/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'

import { HeartOutlined } from '@ant-design/icons'

import Link from '../../../components/Link/Link'
import TagsList from '../../../components/TagsList/TagsList'

import styles from './styles.module.css'

function ShortArticle({ article }) {
  return (
    <div className={styles.article} key={article._id}>
      <div className={styles.mainContent}>
        <img
          src={article.firebasePath}
          alt='article_preview'
          className={styles.articleImg}
        />
        <div className={styles.articleText}>
          <div className={styles.textGroup}>
            <div className={styles.articleHeader}>
              <Link href={`articles/${article._id}`}>
                {article.articleName}
              </Link>
              <HeartOutlined />
            </div>
            <p>{article.text}</p>
          </div>
          <TagsList tagsArray={article.tagsArray} />
        </div>
      </div>
    </div>
  )
}

ShortArticle.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string,
    articleName: PropTypes.string,
    text: PropTypes.string,
    firebasePath: PropTypes.string,
    tagsArray: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default ShortArticle
