import React from 'react'

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
function Profile() {
  return (
    <div className={styles.profileContainer}>
      <Header />
      <div className={styles.mainContent}>
        <ProfileSidebar />
        <div className={styles.articlesContainer}>
          <PageNav
            navArray={[
              'User articles',
              'Liked articles',
              'Events',
            ]}
          />
          <ArticleList
            articles={articleObj}
            articlesCount='2'
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
