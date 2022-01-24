import React from 'react'

import Input from '../../common/Input/Input'
import Form from '../../common/Form/Form'
import Button from '../../common/Button/Button'

import styles from '../styles.module.css'

function SignUpForm() {
  return (
    <fieldset className={styles.fieldsetContainer}>
      <legend className={styles.legendFont}>
        Sign Up
      </legend>
      <Form>
        <Input placeholder="Name" />
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" />
        <Button text="Sign Up" />
      </Form>
    </fieldset>
  )
}

export default SignUpForm
