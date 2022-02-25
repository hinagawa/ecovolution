import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.css'

function PageNav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navElement}>
        <NavLink
          to='/profile/user-articles'
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
        >
          User articles
        </NavLink>
      </div>
      <div className={styles.navElement}>
        <NavLink
          to='/profile/liked-articles'
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
        >
          Liked articles
        </NavLink>
      </div>
      <div className={styles.navElement}>
        <NavLink
          to='/profile/events'
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
        >
          Events
        </NavLink>
      </div>
    </div>
  )
}
export default PageNav
