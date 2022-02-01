import React from 'react'
import PropTypes from 'prop-types'

import CheckboxComponent from './Checkbox'

const disabled = {
  table: {
    disable: true,
  },
}

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    onChange: disabled,
  },
}

export function Checkbox({ text, ...rest }) {
  return <CheckboxComponent {...rest} text={text} />
}

Checkbox.args = {
  text: 'Checkbox label',
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
}
