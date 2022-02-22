import React from 'react'

import Button from '../../components/Button/Button'

import userAvatar from '../../assets/images/avatar.png'
import mapPin from '../../assets/images/mapPin.svg'

import styles from './styles.module.css'

function ProfileInfo() {
  return (
    <div className={styles.profileInfoContainer}>
      <img src={userAvatar} alt='user avatar' />
      <h3>Polina Salimullina</h3>
      <div className={styles.locationInfo}>
        <img src={mapPin} alt='map pin' />
        <p>Kazan, Russia</p>
      </div>
      <Button onClick={undefined}>Edit Profile</Button>
    </div>
  )
}

export default ProfileInfo
