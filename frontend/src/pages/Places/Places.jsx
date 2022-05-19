import React, { useEffect, useState } from 'react'

import SearchBar from '../../layouts/SearchBar/SearchBar'
import Header from '../../layouts/Header/Header'
import PlaceList from '../../layouts/PlaceLayouts/PlaceList/PlaceList'
import NoData from '../../components/Error/NoData'

import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Places() {
  const [places, setPlaces] = useState('')
  useEffect(() => {
    api
      .get('api/place/getPlaces')
      .then((data) => setPlaces(data))
  })
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <SearchBar />
        {Object.keys(places).length !== 0 ? (
          <PlaceList places={places} />
        ) : (
          <NoData />
        )}
      </div>
    </>
  )
}

export default Places
