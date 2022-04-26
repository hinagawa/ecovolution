import React from 'react'

import { EnvironmentOutlined } from '@ant-design/icons'

import Button from '../../components/Button/Button'

import userAvatar from '../../assets/images/avatar.png'

import styles from './styles.module.css'

function ProfileInfo() {
  return (
    <div className={styles.profileInfoContainer}>
      <img
        src={userAvatar}
        alt='user avatar'
        className={styles.userAvatar}
      />
      <h3>Polina Salimullina</h3>
      <div className={styles.locationInfo}>
        <EnvironmentOutlined />
        <p>Kazan, Russia</p>
      </div>
      <Button onClick={undefined}>Edit Profile</Button>
    </div>
  )
}

export default ProfileInfo
