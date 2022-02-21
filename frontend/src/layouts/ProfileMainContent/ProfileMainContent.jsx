import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PageNav from '../PageNav/PageNav'
import ArticleList from '../ArticleLayouts/ArticlesList/ArticlesList'

// import styles from './styles.module.css'

function ProfileMainContent() {
  return (
    <>
      <PageNav
        navArray={[
          'Users article',
          'Liked article',
          'Events',
        ]}
      />
      <Routes>
        <Route
          path='/user-articles'
          element={(
            <ArticleList
              articles={{
                0: {
                  header: 'header',
                  text: 'usesr text',
                  src: 'src',
                  tags: ['recipe', 'tutorial'],
                },
              }}
              articlesCount={undefined}
            />
          )}
        />
        <Route
          path='/liked-articles'
          element={(
            <ArticleList
              articles={undefined}
              articlesCount={undefined}
            />
          )}
        />
      </Routes>
    </>
  )
}

export default ProfileMainContent
