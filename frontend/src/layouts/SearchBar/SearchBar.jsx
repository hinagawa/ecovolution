import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Switch } from 'antd'

import { SearchOutlined,
  FilterOutlined } from '@ant-design/icons'

import Input from '../../components/Input/Input'

import styles from './styles.module.css'

function SearchBar() {
  const navigate = useNavigate()
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
        <Switch />
        <p>Показать только подписки</p>
      </div>
    </div>
  )
}

export default SearchBar
