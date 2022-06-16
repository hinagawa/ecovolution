import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PlusOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import Button from '../../components/Button/Button'
import PlaceForm from '../../layouts/PlaceLayouts/PlaceForm/PlaceForm'
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

  const fetchPlaces = async (search = null) => {
    try {
      setLoading(true)
      const data = await api.get(
        `api/place/getPlaces${search ? `/${search}` : ''}`,
      )
      dispatch(addPlace(data))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPlaces()
  }, [])

  const handleSearch = async (search) => {
    fetchPlaces(search)
  }

  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <SearchBar onSearch={handleSearch} />
        {loading ? <Spin /> : <PlaceList />}
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
          <PlaceForm />
        </Modal>
      )}
    </div>
  )
}

export default Places
