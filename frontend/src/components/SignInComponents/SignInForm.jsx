import React from 'react'

import Input from '../common/Input/Input'
import Form from '../common/Form/Form'
import Checkbox from '../common/Checkbox/Checkbox'
import FormFooter from './SignInFormFooter'

import styles from './styles.module.css'

function SignInForm() {
  return (
    <fieldset className={styles.fieldsetContainer}>
      <legend className={styles.legendFont}>
        Sign In
      </legend>
      <Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Checkbox text="Remember me" />
        <FormFooter />
      </Form>
    </fieldset>
  )
}

export default SignInForm
