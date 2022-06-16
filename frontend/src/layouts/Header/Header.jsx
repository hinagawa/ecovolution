import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import { GlobalOutlined,
  TeamOutlined,
  ReadOutlined,
  CompassOutlined } from '@ant-design/icons'
import ReactTooltip from 'react-tooltip'

import Link from '../../components/Link/Link'

import api from '../../services/api/fetchWrapper'

import { addUserInfo } from '../../store/slices/userSlice'
import { addPlace } from '../../store/slices/placeSlice'

import styles from './styles.module.css'

function Header() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState()
  const [error, setError] = useState('')
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('Authorization')
    const userId = jwt_decode(token)
    api
      .get(`api/user/getById?userId=${userId.id}`)
      .then((data) => (data.success
        ? dispatch(addUserInfo(data.message))
        : setError(data.message)))
    api
      .get('api/place/getPlaces')
      .then((data) => (data
        ? dispatch(addPlace(data))
        : setError(data.message)))
      .then(setLoading(false))
  }, [])
  console.log(error)
  return (
    <div className={styles.header}>
      <h1 className={styles.headerLogo}>EcoRevolution</h1>
      <div className={styles.linkGroup}>
        <Link
          href='/points'
          data-tip='Лайки'
        >
          <GlobalOutlined style={{ color: '#ffffff' }} />
          <p>Баллы</p>
        </Link>
        <ReactTooltip />
        <Link href='/'>
          <TeamOutlined style={{ color: '#ffffff' }} />
          <p>Друзья</p>
        </Link>
        <Link href='/articles?follows=0'>
          <ReadOutlined style={{ color: '#ffffff' }} />
          <p>Статьи</p>
        </Link>
        <Link href='/places'>
          <CompassOutlined style={{ color: '#ffffff' }} />
          <p>Места</p>
        </Link>
        {!loading && !!user && (
          <Link href='/profile'>
            <div className={styles.profileInfo}>
              <img src={user?.firebasePath} alt='User avatar' className={styles.profileImg} />
              <p>{user?.name}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
