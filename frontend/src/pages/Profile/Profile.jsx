import React from 'react'

import PageNav from '../../layouts/PageNav/PageNav'
import ProfileMainContent from '../../layouts/ProfileMainContent/ProfileMainContent'

import styles from './styles.module.css'

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <PageNav
        navArray={[
          'User articles',
          'Liked articles',
          'Events',
        ]}
      />
      <ProfileMainContent />
    </div>
  )
}

export default Profile
