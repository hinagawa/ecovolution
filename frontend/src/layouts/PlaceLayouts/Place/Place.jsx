/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'

import { HeartOutlined,
  EnvironmentOutlined } from '@ant-design/icons'

import Link from '../../../components/Link/Link'

import styles from './styles.module.css'

function Place({ place }) {
  return (
    <div className={styles.placeContainer} key={place._id}>
      <img
        src={place.firebasePath}
        alt='Place'
        className={styles.imgPlace}
      />
      <Link href={`places/${place._id}`}>
        <h1>{place.placeName}</h1>
      </Link>
      <p>{place.placeDescription}</p>
      <div className={styles.placeFooter}>
        <div className={styles.locationContainer}>
          <EnvironmentOutlined />
          <p>{place.placeLocation}</p>
        </div>
        <HeartOutlined />
      </div>
    </div>
  )
}

Place.propTypes = {
  place: PropTypes.shape({
    _id: PropTypes.string,
    placeDescription: PropTypes.string,
    firebasePath: PropTypes.string,
    placeName: PropTypes.string,
    placeLocation: PropTypes.string,
  }).isRequired,
}

export default Place
