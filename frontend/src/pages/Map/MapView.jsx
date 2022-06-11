import React, { useEffect, useState } from 'react'
import { YMaps,
  Map,
  SearchControl,
  Placemark } from 'react-yandex-maps'

import Header from '../../layouts/Header/Header'
import SearchBar from '../../layouts/SearchBar/SearchBar'

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
        <SearchBar />
        {!loading && !!places && (
          <YMaps>
            <Map
              width='100%'
              height='70vh'
              defaultState={{
                center: [55.75, 37.57],
                zoom: 9,
                controls: [],
              }}
            >
              <SearchControl />
              {Object.keys(places).map((key) => (
                <Placemark
                  geometry={places[key]?.placeLocation}
                  options={{
                    openBalloonOnClick: true,
                    hasBallloon: true,
                  }}
                  properties={{
                    balloonContent: places[key]?.placeName,
                  }}
                />
              ))}
            </Map>
          </YMaps>
        )}
      </div>
    </>
  )
}
export default MapView
