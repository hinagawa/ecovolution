import React from 'react'

import SelectComponent from './Select'

export default {
  title: 'Components/Select',
  component: SelectComponent,
}

export function Select({ ...args }) {
  return <SelectComponent {...args} />
}
