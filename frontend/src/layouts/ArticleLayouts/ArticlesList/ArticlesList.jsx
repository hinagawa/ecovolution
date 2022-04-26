import React from 'react'
import PropTypes from 'prop-types'

import Article from '../ShortArticle/ShortArticle'

import styles from './styles.module.css'

function ArticlesList({ articles }) {
  return (
    <div className={styles.containerOfArticles}>
      <div className={styles.listOfArticles}>
        {Object.keys(articles).map((key) => (
          <Article
            headerText={articles[key].articleName}
            text={articles[key].articleText}
            src={articles[key].firebasePath}
            tagsArray={articles[key].tagsArray}
          />
        ))}
      </div>
    </div>
  )
}

ArticlesList.propTypes = {
  articles: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default ArticlesList
