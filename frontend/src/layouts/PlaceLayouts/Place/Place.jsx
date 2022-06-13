/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { HeartOutlined,
  EnvironmentOutlined,
  DeleteOutlined } from '@ant-design/icons'

import api from '../../../services/api/fetchWrapper'

import Link from '../../../components/Link/Link'
import Button from '../../../components/Button/Button'

import styles from './styles.module.css'

function Place({ place }) {
  const currentRole = useSelector(
    (state) => state.user.user.role,
  )

  const handleDelete = async () => {
    await api
      .delete(
        `api/place/deletePlaceById?placeId=${place._id}`,
      )
      .then((data) => console.log(data.message))
  }
  return (
    <div className={styles.placeContainer} key={place._id}>
      <img
        src={place.firebasePath}
        alt='Place'
        className={styles.imgPlace}
      />
      <Link href={`places/${place._id}`}>
        <h1>{place.placeName}</h1>
      </Link>
      <p className={styles.placeDescription}>
        {place.placeDescription.split('.')[0]}
      </p>
      <div className={styles.placeFooter}>
        <div className={styles.locationContainer}>
          <EnvironmentOutlined />
          <p>{place.placeLocation}</p>
        </div>
        <div className={styles.buttonGroup}>
          <Button onClick={handleDelete} variant='link'>
            {currentRole === 'Admin' && <DeleteOutlined />}
          </Button>
          <Button onClick={handleDelete} variant='link'>
            <HeartOutlined />
          </Button>
        </div>
      </div>
    </div>
  )
}

Place.propTypes = {
  place: PropTypes.shape({
    _id: PropTypes.string,
    placeDescription: PropTypes.string,
    firebasePath: PropTypes.string,
    placeName: PropTypes.string,
    placeLocation: PropTypes.string,
  }).isRequired,
}

export default Place
