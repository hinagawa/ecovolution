import React from 'react'

import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ShortInfoList from '../ShortInfoList/ShortInfoList'

import styles from './styles.module.css'

function ProfileSidebar() {
  return (
    <div className={styles.sideContainer}>
      <ProfileInfo />
      <ShortInfoList />
      <ShortInfoList />
    </div>
  )
}

export default ProfileSidebar
