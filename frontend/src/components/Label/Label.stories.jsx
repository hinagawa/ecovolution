import React from 'react'
import PropTypes from 'prop-types'

import LabelComponent from './Label'

export default {
  title: 'Components/Label',
  component: LabelComponent,
  argTypes: {
    variant: {
      defaultValue: 'recipe',
      options: ['tutorial', 'places', 'events', 'lifehack'],
      control: { type: 'select' },
    },
  },
}

export function Label({ ...args }) {
  return <LabelComponent {...args} />
}

Label.propTypes = {
  variant: PropTypes.string.isRequired,
}
