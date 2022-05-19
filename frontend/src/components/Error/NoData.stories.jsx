import React from 'react'

import NoDataComponent from './NoData'

const disabled = {
  table: {
    disable: true,
  },
}

export default {
  title: 'Components/NoData',
  component: NoDataComponent,
  argTypes: {
    className: disabled,
  },
}

export function NoData() {
  return <NoDataComponent />
}
