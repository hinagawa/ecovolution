import React from 'react'
import PropTypes from 'prop-types'

import Article from '../ShortArticle/ShortArticle'

import styles from './styles.module.css'

function ArticlesList({ articles }) {
  return (
    <div className={styles.listOfArticles}>
      {Object.keys(articles).map((key) => (
        <Article article={articles[key]} />
      ))}
    </div>
  )
}

ArticlesList.propTypes = {
  articles: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default ArticlesList
