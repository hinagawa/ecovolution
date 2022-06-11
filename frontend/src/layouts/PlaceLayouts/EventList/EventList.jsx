import React from 'react'
import { useSelector } from 'react-redux'

import Event from '../Event/Event'

import styles from './styles.module.css'

function EventList() {
  const places = useSelector((state) => state.places.places)
  return (
    !!places && (
      <div className={styles.eventList}>
        {Object.keys(places).map((key) => (
          <Event events={places[key].events} />
        ))}
      </div>
    )
  )
}

export default EventList
