import React from 'react'
import PropTypes from 'prop-types'

import Place from '../Place/Place'

import styles from './styles.module.css'

function PlaceList({ places }) {
  return (
    <div className={styles.placeContainer}>
      {Object.keys(places).map((key) => (
        <Place place={places[key]} />
      ))}
    </div>
  )
}

PlaceList.propTypes = {
  places: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default PlaceList
