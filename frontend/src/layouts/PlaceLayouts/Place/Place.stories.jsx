import React from 'react'

import PlaceComponent from './Place'

export default {
  title: 'Layouts/Places/Place',
  component: PlaceComponent,
}

export function Place({ ...args }) {
  return <PlaceComponent {...args} />
}
