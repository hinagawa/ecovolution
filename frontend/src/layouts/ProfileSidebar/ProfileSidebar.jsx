import React from 'react'

import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ShortInfoList from '../ShortInfoList/ShortInfoList'

import styles from './styles.module.css'

function ProfileSidebar() {
  return (
    <div className={styles.sideContainer}>
      <ProfileInfo />
      <ShortInfoList type='Friends' count='10' />
      <ShortInfoList type='Places' count='10' />
    </div>
  )
}

export default ProfileSidebar
