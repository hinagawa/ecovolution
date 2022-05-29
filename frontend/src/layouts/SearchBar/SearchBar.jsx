import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FilterOutlined,
  SearchOutlined } from '@ant-design/icons'

import Input from '../../components/Input/Input'

import styles from './styles.module.css'

function SearchBar() {
  const navigate = useNavigate()
  return (
    <div className={styles.searchBarContainer}>
      <select onChange={(e) => navigate(e.target.value)}>
        <option value='/articles'>Статьи</option>
        <option value='/places'>Места</option>
        <option value='/map'>Карта</option>
      </select>
      <div className={styles.imgContainer}>
        <Input
          className={styles.searchInput}
          placeholder='Type to search'
        />
        <SearchOutlined />
      </div>
      <div className={styles.imgContainer}>
        {/* <Select
          optionArray={['Сначала новые', 'Сначала старые']}
        /> */}
        <FilterOutlined />
      </div>
    </div>
  )
}

export default SearchBar
