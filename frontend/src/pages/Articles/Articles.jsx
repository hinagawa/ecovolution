import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addArticle } from '../../store/articleSlice'

import ArticlesList from '../../layouts/ArticleLayouts/ArticlesList/ArticlesList'
import SearchBar from '../../layouts/SearchBar/SearchBar'
import Header from '../../layouts/Header/Header'

import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Articles() {
  const dispatch = useDispatch()
  useEffect(() => {
    api
      .get('api/article/getArticles')
      .then((data) => dispatch(addArticle(data)))
  })
  return (
    <>
      <Header />
      <div className={styles.articlesContainer}>
        <SearchBar />
        <ArticlesList />
      </div>
    </>
  )
}

export default Articles
