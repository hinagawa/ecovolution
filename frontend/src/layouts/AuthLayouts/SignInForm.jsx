import React from 'react'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import FormFooter from './SignInFormFooter'
import Checkbox from '../../components/Checkbox/Checkbox'
import Form from '../../components/Form/Form'

function SignInForm() {
  return (
    <Form>
      <Input placeholder='E-mail' />
      <Input placeholder='Password' />
      <Checkbox text='Remember me' />
      <Button text='Sign In' />
      <FormFooter />
    </Form>
  )
}

export default SignInForm
