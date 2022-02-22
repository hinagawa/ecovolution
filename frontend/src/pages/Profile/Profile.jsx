import React from 'react'

import ProfileSidebar from '../../layouts/ProfileSidebar/ProfileSidebar'
import PageNav from '../../layouts/PageNav/PageNav'
import Header from '../../layouts/Header/Header'

import styles from './styles.module.css'

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
        </div>
      </div>
    </div>
  )
}

export default Profile
