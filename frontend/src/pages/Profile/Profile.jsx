import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProfileSidebar from '../../layouts/ProfileSidebar/ProfileSidebar'
import PageNav from '../../layouts/PageNav/PageNav'
import Header from '../../layouts/Header/Header'
import ArticleList from '../../layouts/ArticleLayouts/ArticlesList/ArticlesList'

import styles from './styles.module.css'

const articleObj = [
  {
    header: 'Header',
    text: 'Text',
    src: 'src',
    tags: ['recipe', 'tutorial'],
  },
  {
    header: 'Header',
    text: 'Text',
    src: 'src',
    tags: ['recipe', 'tutorial'],
  },
]
const likeObj = [
  {
    header: 'Header',
    text: 'Text',
    src: 'src',
    tags: ['recipe', 'tutorial'],
  },
  {
    header: 'Header',
    text: 'Text',
    src: 'src',
    tags: ['recipe', 'tutorial'],
  },
  {
    header: 'Header',
    text: 'Text',
    src: 'src',
    tags: ['recipe', 'tutorial'],
  },
]

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <Header />
      <div className={styles.mainContent}>
        <ProfileSidebar />
        <div className={styles.articlesContainer}>
          <PageNav />
          <Routes>
            <Route
              path='/user-articles'
              element={(
                <ArticleList
                  articles={articleObj}
                  articlesCount='2'
                />
              )}
            />
            <Route
              path='/liked-articles'
              element={(
                <ArticleList
                  articles={likeObj}
                  articlesCount='3'
                />
              )}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Profile
