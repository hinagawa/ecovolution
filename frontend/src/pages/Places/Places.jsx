import React from 'react'

import SearchBar from '../../layouts/SearchBar/SearchBar'
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
function Places() {
  return (
    <>
      <Header />
      <div>
        <SearchBar />
        <PlaceList places={placesArray} />
      </div>
    </>
  )
}

export default Places
