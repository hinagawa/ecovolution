import React from 'react'

import Header from '../../layouts/Header/Header'
import PlaceList from '../../layouts/PlaceLayouts/PlaceList/PlaceList'

// import styles from './styles.module.css'

const placesArray = {
  0: {
    name: 'Place name',
    location: 'Баумана 39',
  },
  1: {
    name: 'Place name',
    location: 'Баумана 39',
  },
  2: {
    name: 'Place name',
    location: 'Баумана 39',
  },
  3: {
    name: 'Place name',
    location: 'Баумана 39',
  },
}
function Place() {
  return (
    <>
      <Header />
      <PlaceList places={placesArray} />
    </>
  )
}

export default Place
