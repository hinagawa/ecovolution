import React from 'react'

import { HeartOutlined, TeamOutlined, ReadOutlined, CompassOutlined } from '@ant-design/icons'

import avatar from '../../assets/images/avatar.png'

import Link from '../../components/Link/Link'

import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerLogo}>Ecovolution</h1>
      <div className={styles.linkGroup}>
        <Link href='/profile/liked-articles'>
          <HeartOutlined style={{ color: '#ffffff' }} />
          <p>Favourite</p>
        </Link>
        <Link href='/'>
          <TeamOutlined style={{ color: '#ffffff' }} />
          <p>Friends</p>
        </Link>
        <Link href='/articles'>
          <ReadOutlined style={{ color: '#ffffff' }} />
          <p>Articles</p>
        </Link>
        <Link href='/places'>
          <CompassOutlined style={{ color: '#ffffff' }} />
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
