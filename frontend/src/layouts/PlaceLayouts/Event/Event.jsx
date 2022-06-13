import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Event({ events }) {
  return events.map((event) => (
    // eslint-disable-next-line no-underscore-dangle
    <div key={event?._id} className={styles.eventContainer}>
      <img src={event?.firebasePath} alt='Place' className={styles.eventImage} />
      <h1>{event?.eventName}</h1>
      <p>{event?.eventDescription}</p>
      <div>
        <p>{event?.eventDate.split('T')[0]}</p>
      </div>
    </div>
  ))
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
