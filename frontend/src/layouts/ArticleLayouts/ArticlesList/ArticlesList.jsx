import React from 'react'
import PropTypes from 'prop-types'

import Article from '../ShortArticle/ShortArticle'

import styles from './styles.module.css'

function ArticlesList({ articles, articlesCount }) {
  return (
    <div className={styles.containerOfArticles}>
      {`${articlesCount} articles`}
      <div className={styles.listOfArticles}>
        {articles.map((article) => (
          <Article
            headerText={article.header}
            text={article.text}
            src={article.img}
            tagsArray={article.tags}
          />
        ))}
      </div>
    </div>
  )
}

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  articlesCount: PropTypes.number.isRequired,
}

export default ArticlesList
