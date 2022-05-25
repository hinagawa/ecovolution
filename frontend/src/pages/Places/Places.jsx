import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import SearchBar from '../../layouts/SearchBar/SearchBar'
import Header from '../../layouts/Header/Header'
import PlaceList from '../../layouts/PlaceLayouts/PlaceList/PlaceList'

import { addPlace } from '../../store/placeSlice'
import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Places() {
  const dispatch = useDispatch()
  useEffect(() => {
    api
      .get('api/place/getPlaces')
      .then((data) => dispatch(addPlace(data)))
  })
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <SearchBar />
        <PlaceList />
      </div>
    </>
  )
}

export default Places
