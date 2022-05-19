import React from 'react'
import PropTypes from 'prop-types'

import Place from '../Place/Place'

import styles from './styles.module.css'

function PlaceList({ places }) {
  return (
    <div className={styles.placeContainer}>
      {Object.keys(places).map((key) => (
        <Place
          placeName={places[key].placeName}
          placeDescription={places[key].placeDescription}
          placeLocation={places[key].placeLocation}
          placeImgPath={places[key].firebasePath}
        />
      ))}
    </div>
  )
}

PlaceList.propTypes = {
  places: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default PlaceList
