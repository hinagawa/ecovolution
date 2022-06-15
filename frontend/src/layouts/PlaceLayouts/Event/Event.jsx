import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Event({ events }) {
  console.log(events)
  return (
    // eslint-disable-next-line no-underscore-dangle
    <div key={events?._id} className={styles.eventContainer}>
      <img src={events?.firebasePath} alt='Place' className={styles.eventImage} />
      <h1>{events?.eventName}</h1>
      <p>{events?.eventDescription}</p>
      <div>
        <p>{events?.eventDate.split('T')[0]}</p>
      </div>
    </div>
  )
}

Event.propTypes = {
  events: PropTypes.shape({
    _id: PropTypes.string,
    eventName: PropTypes.string,
    eventDescription: PropTypes.string,
    firebasePath: PropTypes.string,
    eventDate: PropTypes.string,
    placeId: PropTypes.string,
  }).isRequired,
}

export default Event