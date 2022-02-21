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

export function Button({ variant, children, ...rest }) {
  return (
    <ButtonComponent {...rest} variant={variant}>
      {children}
    </ButtonComponent>
  )
}

Button.args = {
  children: 'Primary button',
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}
