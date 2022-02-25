import React from 'react'

import heart from '../../assets/images/heart.svg'
import compass from '../../assets/images/compass.svg'
import article from '../../assets/images/news.svg'
import users from '../../assets/images/users.svg'
import avatar from '../../assets/images/avatar.png'

import Link from '../../components/Link/Link'

import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerLogo}>Ecovolution</h1>
      <div className={styles.linkGroup}>
        <Link href='/profile/liked-articles'>
          <img src={heart} alt='Favourite' />
          <p>Favourite</p>
        </Link>
        <Link href='/'>
          <img src={users} alt='Friends' />
          <p>Friends</p>
        </Link>
        <Link href='/articles'>
          <img src={article} alt='Articles' />
          <p>Articles</p>
        </Link>
        <Link href='/places'>
          <img src={compass} alt='Places' />
          <p>Places</p>
        </Link>
        <Link href='/profile/user-articles'>
          <div className={styles.profileInfo}>
            <img src={avatar} alt='User avatar' />
            <p>Username</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
