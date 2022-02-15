import React from 'react'

import star from '../../assets/images/star.svg'
import compass from '../../assets/images/compass.svg'
import news from '../../assets/images/news.svg'
import chat from '../../assets/images/chat.svg'
import users from '../../assets/images/users.svg'

import Link from '../../components/Link/Link'

import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.linkGroup}>
        <Link href='/'>
          <img src={star} alt='Favourite' />
          <p>Favourite</p>
        </Link>
        <Link href='/'>
          <img src={users} alt='Friends' />
          <p>Friends</p>
        </Link>
        <Link href='/'>
          <img src={news} alt='News' />
          <p>News</p>
        </Link>
        <Link href='/'>
          <img src={compass} alt='Places' />
          <p>Places</p>
        </Link>
        <Link href='/'>
          <img src={chat} alt='Messages' />
          <p>Messages</p>
        </Link>
      </div>
    </div>
  )
}

export default Header
