import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProfileSidebar from '../../layouts/ProfileSidebar/ProfileSidebar'
import PageNav from '../../layouts/PageNav/PageNav'
import Header from '../../layouts/Header/Header'
import Article from '../../layouts/ArticleLayouts/ShortArticle/ShortArticle'

import styles from './styles.module.css'

function Profile() {
  const likedArticles = useSelector(
    (state) => state.user.user.likedArticles,
  )
  return (
    <div className={styles.profileContainer}>
      <Header />
      <div className={styles.mainContent}>
        <ProfileSidebar />
        <div className={styles.articlesContainer}>
          <PageNav />
          <Routes>
            <Route
              path='/liked-articles'
              element={
                !!likedArticles && (
                  <div className={styles.listOfArticles}>
                    {Object.keys(likedArticles).map(
                      (key) => (
                        <Article
                          article={likedArticles[key]}
                        />
                      ),
                    )}
                  </div>
                )
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Profile
