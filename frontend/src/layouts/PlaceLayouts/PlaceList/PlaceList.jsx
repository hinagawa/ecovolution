import { React } from 'react'
import { useSelector } from 'react-redux'

import Place from '../Place/Place'

import styles from './styles.module.css'

function PlaceList() {
  const places = useSelector(
    (state) => state.places.places,
  )
  return (
    !!places && (
      <div className={styles.placeContainer}>
        {Object.keys(places).map((key) => (
          // eslint-disable-next-line no-underscore-dangle
          <Place key={places[key]._id} place={places[key]} />
        ))}
      </div>
    )
  )
}

export default PlaceList
