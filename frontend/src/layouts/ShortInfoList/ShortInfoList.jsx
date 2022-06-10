import React from 'react'
import PropTypes from 'prop-types'

// import friendAvatar from '../../assets/images/friendAvatar.jpg'

// import Link from '../../components/Link/Link'

import styles from './styles.module.css'

function ShortInfoList({ type, data }) {
  const count = data?.length
  console.log(data)
  return (
    <div className={styles.mainContainer}>
      <p>{`${type} ${count}`}</p>
      <div className={styles.listOfCircles}>
        {count === 0 ? <p>No data</p> : count}
      </div>
    </div>
  )
}

ShortInfoList.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
}
export default ShortInfoList
