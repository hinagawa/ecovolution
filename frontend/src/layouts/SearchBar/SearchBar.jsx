import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Switch } from 'antd'

import { SearchOutlined,
  FilterOutlined } from '@ant-design/icons'

import Input from '../../components/Input/Input'

import styles from './styles.module.css'

function SearchBar() {
  const navigate = useNavigate()
  const [follows, setFollows] = useState(true)
  const handleChange = () => {
    setFollows(!follows)
    console.log(follows)
  }
  return (
    <div className={styles.searchBarContainer}>
      <select
        onChange={(e) => {
          navigate(e.target.value)
          window.location.reload(false)
        }}
      >
        <option>Выберите нужный раздел</option>
        <option value='/articles'>Статьи</option>
        <option value='/places'>Места</option>
        <option value='/map'>Карта</option>
      </select>
      <div className={styles.searchContainer}>
        <FilterOutlined />
        <Input
          className={styles.searchInput}
          placeholder='Type to search'
        />
        <SearchOutlined />
      </div>
      <div className={styles.switchContainer}>
        <Switch onChange={handleChange} />
        <p>Показать только подписки</p>
      </div>
    </div>
  )
}

export default SearchBar
