import React from 'react'
import PropTypes from 'prop-types'

import FormComponent from './Form'
import ButtonComponent from '../Button/Button'
import InputComponent from '../Input/Input'
import CheckboxComponent from '../Checkbox/Checkbox'

const disabled = {
  table: {
    disable: true,
  },
}

export default {
  title: 'Components/Form',
  component: FormComponent,
  argTypes: {
    className: disabled,
    onSubmit: disabled,
    children: disabled,
  },
}

export function Form({ args }) {
  return (
    <FormComponent {...args}>
      <InputComponent placeholder='Login' />
      <InputComponent placeholder='Password' />
      <CheckboxComponent text='Remember me' />
      <ButtonComponent text='Sign In' />
    </FormComponent>
  )
}

Form.propTypes = {
  args: PropTypes.arrayOf(PropTypes.string).isRequired,
}
