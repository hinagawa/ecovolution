import React, { useState, useEffect } from 'react'

import ArticlesList from '../../layouts/ArticleLayouts/ArticlesList/ArticlesList'
import SearchBar from '../../layouts/SearchBar/SearchBar'
import Header from '../../layouts/Header/Header'

import api from '../../services/api/fetchWrapper'

function Articles() {
  const [articles, setArticles] = useState('')
  useEffect(() => {
    api
      .get('api/article/getArticles')
      .then((data) => setArticles(data))
  })
  return (
    <>
      <Header />
      <div>
        <SearchBar />
        <ArticlesList
          articles={articles}
        />
      </div>
    </>
  )
}

export default Articles
