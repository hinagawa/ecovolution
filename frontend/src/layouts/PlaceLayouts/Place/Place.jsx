import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { HeartOutlined, EnvironmentOutlined } from '@ant-design/icons'

import Link from '../../../components/Link/Link'

import defaultImage from '../../../assets/images/placeImg.jpg'

import styles from './styles.module.css'

function Place({
  placeName,
  placeDescription,
  placeLocation,
  placeImgPath,
}) {
  useEffect(() => {})
  return (
    <div className={styles.placeContainer}>
      <img
        src={placeImgPath}
        alt='Place'
        className={styles.imgPlace}
      />
      <Link href='/'>
        <h1>{placeName}</h1>
      </Link>
      <p>{placeDescription}</p>
      <div className={styles.placeFooter}>
        <div className={styles.locationContainer}>
          <EnvironmentOutlined />
          <p>{placeLocation}</p>
        </div>
        <HeartOutlined />
      </div>
    </div>
  )
}

Place.propTypes = {
  placeDescription: PropTypes.string.isRequired,
  placeImgPath: PropTypes.string,
  placeName: PropTypes.string.isRequired,
  placeLocation: PropTypes.string.isRequired,
}

Place.defaultProps = {
  placeImgPath: defaultImage,
}

export default Place
