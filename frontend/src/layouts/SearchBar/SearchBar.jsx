import React from 'react'

import { FilterOutlined, SearchOutlined } from '@ant-design/icons'

import Select from '../../components/Select/Select'
import Input from '../../components/Input/Input'

import styles from './styles.module.css'

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <Select optionArray={['Места', 'Статьи', 'Карта']} />
      <div className={styles.imgContainer}>
        <Input
          className={styles.searchInput}
          placeholder='Type to search'
        />
        <SearchOutlined />
      </div>
      <div className={styles.imgContainer}>
        <Select
          optionArray={['Сначала новые', 'Сначала старые']}
        />
        <FilterOutlined />
      </div>
    </div>
  )
}

export default SearchBar
