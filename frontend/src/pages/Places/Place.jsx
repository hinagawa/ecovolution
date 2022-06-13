/* eslint-disable no-underscore-dangle */
import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import Header from '../../layouts/Header/Header'
import EventList from '../../layouts/PlaceLayouts/EventList/EventList'
import Button from '../../components/Button/Button'

import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Place() {
  const [place, setPlace] = useState()
  const [isCalendar, setIsCalendar] = useState(false)
  const location = useLocation()

  useEffect(async () => {
    const id = location.pathname.split('/')[2]
    await api
      .get(`api/place/getPlaceById?placeId=${id}`)
      .then((data) => setPlace(data.message))
  })
  return (
    <>
      <Header />
      <div className={styles.placeContainer}>
        <div className={styles.placeInfo}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <h1>{place?.placeName}</h1>
              <img
                src={place?.firebasePath}
                alt='Place'
                className={styles.placeImage}
              />
              <div>
                <p className={styles.placeText}>
                  {place?.placeLocation}
                </p>
              </div>
            </div>
            <div className={styles.flipCardBack}>
              <p className={styles.placeText}>
                {place?.placeDescription}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.eventContainer}>
          <div className={styles.listMenu}>
            <h1>События</h1>
            <li
              className={isCalendar ? null : styles.active}
            >
              <Button
                variant='link'
                onClick={() => setIsCalendar(false)}
              >
                Список
              </Button>
            </li>
            <li
              className={isCalendar ? styles.active : null}
            >
              <Button
                variant='link'
                onClick={() => setIsCalendar(true)}
              >
                Календарь
              </Button>
            </li>
          </div>
          {isCalendar && (
            <div className={styles.calendarContainer}>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                initialEvents={[
                  {
                    title: 'event1',
                    start: '2022-01-01',
                  },
                  {
                    title: 'event2',
                    start: '2022-01-05',
                    end: '2022-01-07',
                  },
                  {
                    title: 'event3',
                    start: '2022-01-09T12:30:00',
                    allDay: false, // will make the time show
                  },
                ]}
              />
            </div>
          )}
          {!isCalendar && <EventList events={place?._id} />}
        </div>
      </div>
    </>
  )
}

export default Place
