import React from 'react'

import search from '../../assets/images/search.svg'
import filter from '../../assets/images/filter.svg'

import Select from '../../components/Select/Select'
import Input from '../../components/Input/Input'

import styles from './styles.module.css'

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <Select optionArray={['Места', 'Статьи', 'Карта']} />
      <div className={styles.searchInput}>
        <Input placeholder='Type to search' />
        <img src={search} alt='Search' />
      </div>
      <div>
        <Select
          optionArray={['Сначала новые', 'Сначала старые']}
        />
        <img src={filter} alt='Filter' />
      </div>
    </div>
  )
}

export default SearchBar
