import React from 'react'
import PropTypes from 'prop-types'

import ButtonComponent from './Button'

const disabled = {
  table: {
    disable: true,
  },
}

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'link'],
      control: { type: 'select' },
    },
    onClick: disabled,
  },
}

export function Button({ variant, ...rest }) {
  return <ButtonComponent {...rest} variant={variant} text={`${variant} button`} />
}

Button.args = {
  text: 'Primary button',
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
}
