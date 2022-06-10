import React from 'react'
import { useSelector } from 'react-redux'

import Button from '../../components/Button/Button'

import userAvatar from '../../assets/images/avatar.png'

import styles from './styles.module.css'

function ProfileInfo() {
  const user = useSelector((state) => state.user.user)
  const logout = () => {
    localStorage.clear()
    window.location.reload(false)
  }
  return (
    <div className={styles.profileInfoContainer}>
      <img
        src={userAvatar}
        alt='user avatar'
        className={styles.userAvatar}
      />
      <h3>{`${user.name} ${user.lastname}`}</h3>
      <Button onClick={undefined}>
        Редактировать профиль
      </Button>
      <Button onClick={logout}>Выйти</Button>
    </div>
  )
}

export default ProfileInfo
