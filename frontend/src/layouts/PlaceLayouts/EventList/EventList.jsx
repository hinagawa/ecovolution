import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Event from '../Event/Event'

import api from '../../../services/api/fetchWrapper'

import styles from './styles.module.css'

function EventList() {
  const [eventList, setEventList] = useState()
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  useEffect(async () => {
    await api
      .get(`api/place/getEventByPlaceId?placeId=${id}`)
      .then((data) => setEventList(data.message))
    console.log(eventList)
  })
  return (
    !!eventList && (
      <div className={styles.eventList}>
        {Object.keys(eventList).map((key) => (
          <Event events={eventList[key]} />
        ))}
      </div>
    )
  )
}

export default EventList
