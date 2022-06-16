import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../../layouts/Header/Header'
import Link from '../../components/Link/Link'

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
  console.log(article)

  return (
    <>
      <Header />
      <div className={styles.articleContainer}>
        <div className={styles.recomm}>
          <div className={styles.articleContent}>
            <h2>{article?.articleName}</h2>
            <img
              src={article?.firebasePath}
              alt='Article'
              className={styles.articleImg}
            />
            <Link href='/'>Polina Salimullina</Link>
          </div>
          <div className={styles.friendRec}>
            <h3>На основе интересов Ваших друзей:</h3>
            <div className={styles.interes}>
              <Link href='/'>
                <img
                  className={styles.cirlceimg}
                  src='https://firebasestorage.googleapis.com/v0/b/ecovolution-d1a3a.appspot.com/o/e778c2ac2370712e038a7575b9b0d128.jpg?alt=media&token=33fa414c-84b0-4892-be49-b152f4134b91'
                  alt='Place1'
                />
                <img
                  className={styles.cirlceimg}
                  src='https://firebasestorage.googleapis.com/v0/b/ecovolution-d1a3a.appspot.com/o/297536a846e2129869c4ec3a6d4921a7b6b860.jpg?alt=media&token=bab1b92c-bc86-45f4-959d-d1bb0888c28b'
                  alt='Place1'
                />
                <img
                  className={styles.cirlceimg}
                  src='https://firebasestorage.googleapis.com/v0/b/ecovolution-d1a3a.appspot.com/o/interior.jpg?alt=media&token=337576ad-4f75-45a5-baa6-2a7e4a364919'
                  alt='Place1'
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.authorInfo}>
          <p>{article?.articleText}</p>
        </div>
      </div>
    </>
  )
}

export default Article
