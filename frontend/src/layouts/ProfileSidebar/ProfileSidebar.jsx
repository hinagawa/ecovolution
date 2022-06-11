import React from 'react'
import { useSelector } from 'react-redux'

import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ShortInfoList from '../ShortInfoList/ShortInfoList'

import styles from './styles.module.css'

function ProfileSidebar() {
  const likedPlaces = useSelector(
    (state) => state.user.user.likedPlaces,
  )
  const friends = useSelector(
    (state) => state.user.user.friends,
  )
  return (
    <div className={styles.sideContainer}>
      <ProfileInfo />
      <div>
        <ShortInfoList type='Friends' data={friends} />
        <ShortInfoList type='Places' data={likedPlaces} />
      </div>
    </div>
  )
}

export default ProfileSidebar
