import React, { useEffect, useState } from 'react'
import { YMaps,
  Map,
  SearchControl,
  Placemark } from 'react-yandex-maps'

import Header from '../../layouts/Header/Header'

import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function MapView() {
  const [places, setPlaces] = useState()
  const [loading, setLoading] = useState()

  useEffect(async () => {
    setLoading(true)
    await api
      .get('api/place/getAllCoordinates')
      .then((data) => setPlaces(data))
      .then(setLoading(false))
  })
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        {!loading && !!places && (
          <YMaps>
            <Map
              width='100%'
              height='85vh'
              defaultState={{
                center: [55.7879, 49.1233],
                zoom: 9,
                controls: [],
              }}
            >
              <SearchControl />
              <Placemark
                geometry={['55.782066', '49.131261']}
                options={{
                  openBalloonOnClick: true,
                  hasBallloon: true,
                }}
                properties={{
                  balloonContent: 'Surf coffee',
                }}
              />
              <Placemark
                geometry={['55.787983', '49.110304']}
                options={{
                  openBalloonOnClick: true,
                  hasBallloon: true,
                }}
                properties={{
                  balloonContent: 'Супстанция',
                }}
              />
              <Placemark
                geometry={['55.789795', '49.114247']}
                options={{
                  openBalloonOnClick: true,
                  hasBallloon: true,
                }}
                properties={{
                  balloonContent: 'Vegan Day',
                }}
              />
            </Map>
          </YMaps>
        )}
      </div>
    </>
  )
}
export default MapView
