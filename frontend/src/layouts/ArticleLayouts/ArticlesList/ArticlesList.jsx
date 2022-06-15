import React from 'react'
import { useSelector } from 'react-redux'

import Article from '../ShortArticle/ShortArticle'

import styles from './styles.module.css'

function ArticlesList() {
  const articles = useSelector(
    (state) => state.articles.articles,
  )
  return (
    !!articles && (
      <div className={styles.listOfArticles}>
        {Object.keys(articles).map((key) => (
          // eslint-disable-next-line no-underscore-dangle
          <Article key={articles[key]._id} article={articles[key]} />
        ))}
      </div>
    )
  )
}

export default ArticlesList
