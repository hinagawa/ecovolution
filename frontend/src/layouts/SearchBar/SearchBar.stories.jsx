import React from 'react'

import SearchBarComponent from './SearchBar'

export default {
  title: 'Layouts/SearchBar',
  component: SearchBarComponent,
}

export function SearchBar({ ...args }) {
  return <SearchBarComponent {...args} />
}
