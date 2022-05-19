import React from 'react'

import HeaderComponent from './Header'

export default {
  title: 'Layouts/Header',
  component: HeaderComponent,
}

export function Header({ ...args }) {
  return <HeaderComponent {...args} />
}
