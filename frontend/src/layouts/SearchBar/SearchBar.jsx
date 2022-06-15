import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Switch } from 'antd'

import { SearchOutlined,
  FilterOutlined } from '@ant-design/icons'

import Input from '../../components/Input/Input'

import styles from './styles.module.css'

function SearchBar({ showSubscriptionFilter, placeholder, onSearch, onSubscriptionFilter }) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch(search)
            }
          }}
          className={styles.searchInput}
          placeholder={placeholder}
        />
        <SearchOutlined onClick={() => onSearch(search)} />
      </div>
      {showSubscriptionFilter && (
        <div className={styles.switchContainer}>
          <Switch onChange={handleChange} />
          <span>Показать только подписки</span>
        </div>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  showSubscriptionFilter: PropTypes.bool,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  onSubscriptionFilter: PropTypes.func,
}

SearchBar.defaultProps = {
  showSubscriptionFilter: false,
  placeholder: 'Поиск...',
  onSearch: () => {},
  onSubscriptionFilter: () => {},
}

export default SearchBar
