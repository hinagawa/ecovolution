import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import { HeartOutlined,
  TeamOutlined,
  ReadOutlined,
  CompassOutlined } from '@ant-design/icons'

import avatar from '../../assets/images/avatar.png'

import Link from '../../components/Link/Link'

import customFetch from '../../services/api/fetchWrapper'
import { addUserInfo } from '../../store/slices/userSlice'

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
    customFetch
      .get(`api/user/getById?userId=${userId.id}`)
      .then((data) => (data.success
        ? dispatch(addUserInfo(data.message))
        : setError(data.message)))
      .then(setLoading(false))
  }, [])
  console.log(error)
  return (
    <div className={styles.header}>
      <h1 className={styles.headerLogo}>Ecovolution</h1>
      <div className={styles.linkGroup}>
        <Link href='/profile/liked-articles'>
          <HeartOutlined style={{ color: '#ffffff' }} />
          <p>Favourite</p>
        </Link>
        <Link href='/'>
          <TeamOutlined style={{ color: '#ffffff' }} />
          <p>Friends</p>
        </Link>
        <Link href='/articles'>
          <ReadOutlined style={{ color: '#ffffff' }} />
          <p>Articles</p>
        </Link>
        <Link href='/places'>
          <CompassOutlined style={{ color: '#ffffff' }} />
          <p>Places</p>
        </Link>
        {!loading && !!user && (
          <Link href='/profile'>
            <div className={styles.profileInfo}>
              <img src={avatar} alt='User avatar' />
              <p>{user.name}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
