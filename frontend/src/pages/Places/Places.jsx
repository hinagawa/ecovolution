import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import SearchBar from '../../layouts/SearchBar/SearchBar'
import Header from '../../layouts/Header/Header'
import PlaceList from '../../layouts/PlaceLayouts/PlaceList/PlaceList'

import { addPlace } from '../../store/slices/placeSlice'
import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Places() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState()

  useEffect(async () => {
    setLoading(true)
    await api
      .get('api/place/getPlaces')
      .then((data) => dispatch(addPlace(data)))
      .then(setLoading(false))
  })
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <SearchBar />
        {loading ? 'Loading' : <PlaceList />}
      </div>
    </>
  )
}

export default Places
