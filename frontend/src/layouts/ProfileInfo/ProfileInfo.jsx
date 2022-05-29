import React from 'react'
import { useSelector } from 'react-redux'

import Button from '../../components/Button/Button'

import userAvatar from '../../assets/images/avatar.png'

import styles from './styles.module.css'

function ProfileInfo() {
  const user = useSelector((state) => state.user.user)

  return (
    <div className={styles.profileInfoContainer}>
      <img
        src={userAvatar}
        alt='user avatar'
        className={styles.userAvatar}
      />
      <h3>{`${user.name} ${user.lastname}`}</h3>
      <Button onClick={undefined}>Edit Profile</Button>
    </div>
  )
}

export default ProfileInfo
