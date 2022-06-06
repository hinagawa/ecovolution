import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import { HeartOutlined,
  TeamOutlined,
  ReadOutlined,
  CompassOutlined } from '@ant-design/icons'
import ReactTooltip from 'react-tooltip'

import avatar from '../../assets/images/avatar.png'

import Link from '../../components/Link/Link'

import api from '../../services/api/fetchWrapper'

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
    api
      .get(`api/user/getById?userId=${userId.id}`)
      .then((data) => (data.success
        ? dispatch(addUserInfo(data.message))
        : setError(data.message)))
      .then(setLoading(false))
  }, [])
  console.log(error)
  return (
    <div className={styles.header}>
      <h1 className={styles.headerLogo}>EcoRevolution</h1>
      <div className={styles.linkGroup}>
        <Link href='/profile/liked-articles' data-tip='Лайки'>
          <HeartOutlined style={{ color: '#ffffff' }} />
          <p>Лайки</p>
        </Link>
        <ReactTooltip />
        <Link href='/'>
          <TeamOutlined style={{ color: '#ffffff' }} />
          <p>Друзья</p>
        </Link>
        <Link href='/articles'>
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
