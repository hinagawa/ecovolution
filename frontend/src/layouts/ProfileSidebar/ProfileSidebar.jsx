import React from 'react'
import { useSelector } from 'react-redux'

import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ShortInfoList from '../ShortInfoList/ShortInfoList'

import styles from './styles.module.css'

function ProfileSidebar() {
  const likedPlaces = useSelector((state) => state.user.user.likedPlaces)
  console.log(likedPlaces)
  return (
    <div className={styles.sideContainer}>
      <ProfileInfo />
      <ShortInfoList type='Friends' />
      <ShortInfoList type='Places' data={likedPlaces} />
    </div>
  )
}

export default ProfileSidebar
