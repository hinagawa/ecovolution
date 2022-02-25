import React from 'react'

import ArticlesList from '../../layouts/ArticleLayouts/ArticlesList/ArticlesList'
import SearchBar from '../../layouts/SearchBar/SearchBar'
import Header from '../../layouts/Header/Header'

// import styles from './styles.module.css'

const articlesArray = [
  {
    headerText: 'Header text',
    text: 'Text',
    src: undefined,
    tagsArray: ['recipe'],
  },
  {
    headerText: 'Header text',
    text: 'Text',
    src: undefined,
    tagsArray: ['recipe'],
  },
  {
    headerText: 'Header text',
    text: 'Text',
    src: undefined,
    tagsArray: ['recipe'],
  },
]

function Articles() {
  return (
    <>
      <Header />
      <div>
        <SearchBar />
        <ArticlesList
          articles={articlesArray}
          articlesCount='3'
        />
      </div>
    </>
  )
}

export default Articles
