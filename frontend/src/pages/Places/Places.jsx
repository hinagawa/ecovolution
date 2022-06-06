import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PlusOutlined } from '@ant-design/icons'

import Button from '../../components/Button/Button'
import SearchBar from '../../layouts/SearchBar/SearchBar'
import Modal from '../../layouts/Modal/Modal'
import Header from '../../layouts/Header/Header'
import PlaceList from '../../layouts/PlaceLayouts/PlaceList/PlaceList'

import { addPlace } from '../../store/slices/placeSlice'
import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Places() {
  const [isOpen, setIsOpen] = useState(false)
  const userRole = useSelector(
    (state) => state.user.user.role,
  )
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
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <SearchBar />
        {loading ? 'Loading' : <PlaceList />}
      </div>
      {userRole === 'Admin' && (
        <div className={styles.buttonContainer}>
          <Button
            variant='primary'
            shape='circle'
            onClick={() => setIsOpen(true)}
          >
            <PlusOutlined />
          </Button>
        </div>
      )}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h1>sdd</h1>
        </Modal>
      )}
    </div>
  )
}

export default Places
