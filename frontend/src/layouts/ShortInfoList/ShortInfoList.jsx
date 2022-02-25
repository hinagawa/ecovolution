import React from 'react'
import PropTypes from 'prop-types'

import friendAvatar from '../../assets/images/friendAvatar.jpg'

import Link from '../../components/Link/Link'

import styles from './styles.module.css'

function ShortInfoList({ type, count }) {
  return (
    <div className={styles.mainContainer}>
      <p>{`${type} ${count}`}</p>
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

ShortInfoList.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}
export default ShortInfoList
