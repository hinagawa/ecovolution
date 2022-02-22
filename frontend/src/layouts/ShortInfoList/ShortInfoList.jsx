import React from 'react'

import friendAvatar from '../../assets/images/friendAvatar.jpg'

import Link from '../../components/Link/Link'

import styles from './styles.module.css'

function ShortInfoList() {
  return (
    <div className={styles.mainContainer}>
      <p>Friends 10</p>
      <div className={styles.listOfCircles}>
        <Link href='/'>
          <img src={friendAvatar} alt='friends_img' />
        </Link>
        <Link href='/'>
          <img src={friendAvatar} alt='friends_img' />
        </Link>
        <Link href='/'>
          <img src={friendAvatar} alt='friends_img' />
        </Link>
        <Link href='/'>
          <img src={friendAvatar} alt='friends_img' />
        </Link>
        <Link href='/'>
          <div className={styles.otherFriends}>
            <p>+6</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ShortInfoList
