/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'

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
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this article!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        api.delete(`api/place/deletePlaceById?placeId=${place._id}`)
          .then((data) => console.log(data.message))
        swal(
          'Your article file has been deleted!',
          {
            icon: 'success',
          },
        )
      } else {
        swal('Your article is safe!')
      }
    })
  }
  return (
    <div className={styles.placeContainer}>
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
