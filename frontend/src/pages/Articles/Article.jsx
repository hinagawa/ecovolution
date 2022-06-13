import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../../layouts/Header/Header'

import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Article() {
  const [article, setArticle] = useState()
  const location = useLocation()

  useEffect(async () => {
    const id = location.pathname.split('/')[2]
    await api
      .get(`api/article/getArticleById?articleId=${id}`)
      .then((data) => setArticle(data.message))
  })
  return (
    <>
      <Header />
      <div className={styles.articleContainer}>
        <h1>{article?.articleName}</h1>
        <p>{article?.articleText}</p>
        <img
          src={article?.firebasePath}
          alt='Article'
          className={styles.articleImage}
        />
      </div>
    </>
  )
}

export default Article
