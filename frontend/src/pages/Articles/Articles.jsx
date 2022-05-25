import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addArticle } from '../../store/slices/articleSlice'

import ArticlesList from '../../layouts/ArticleLayouts/ArticlesList/ArticlesList'
import SearchBar from '../../layouts/SearchBar/SearchBar'
import Header from '../../layouts/Header/Header'

import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Articles() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState()
  useEffect(async () => {
    setLoading(true)
    await api
      .get('api/article/getArticles')
      .then((data) => dispatch(addArticle(data)))
      .then(setLoading(false))
  })
  return (
    <>
      <Header />
      <div className={styles.articlesContainer}>
        <SearchBar />
        {loading ? 'Loading' : <ArticlesList />}
      </div>
    </>
  )
}

export default Articles
