import React from 'react'
import PropTypes from 'prop-types'

import heart from '../../../assets/images/heartBlack.svg'
import mapPin from '../../../assets/images/mapPin.svg'
import defaultImage from '../../../assets/images/placeImg.jpg'

import styles from './styles.module.css'

function Place({ placeImg, placeName, placeLocation }) {
  return (
    <div className={styles.placeContainer}>
      <img
        src={placeImg}
        alt='Place'
        className={styles.imgPlace}
      />
      <h1>{placeName}</h1>
      <div className={styles.placeFooter}>
        <div className={styles.locationContainer}>
          <img src={mapPin} alt='Map pin' />
          <p>{placeLocation}</p>
        </div>
        <img src={heart} alt='Like' />
      </div>
    </div>
  )
}

Place.propTypes = {
  placeImg: PropTypes.string,
  placeName: PropTypes.string.isRequired,
  placeLocation: PropTypes.string.isRequired,
}

Place.defaultProps = {
  placeImg: defaultImage,
}

export default Place
