import React from 'react'
import PropTypes from 'prop-types'

import InputComponent from './Input'

const disabled = {
  table: {
    disable: true,
  },
}

export default {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    value: disabled,
    id: disabled,
    className: disabled,
    onChange: disabled,
  },
}

export function Input({ ...args }) {
  return <InputComponent {...args} />
}

Input.args = {
  placeholder: 'Input text',
}

Input.propTypes = {
  variant: PropTypes.string.isRequired,
}
