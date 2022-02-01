import React from 'react'

import img from '../../assets/images/img.png'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import FormFooter from '../../layouts/AuthLayouts/SignInFormFooter'
import Checkbox from '../../components/Checkbox/Checkbox'
import Form from '../../components/Form/Form'

import styles from './styles.module.css'

function SignInPage() {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.logoContainer}>
        <h1>Ecovolution</h1>
        <img src={img} alt='Girl with horse' />
      </div>
      <div className={styles.formContainer}>
        <fieldset className={styles.fieldsetContainer}>
          <legend className={styles.legendFont}>
            Sign In
          </legend>
          <Form>
            <Input placeholder='E-mail' />
            <Input placeholder='Password' />
            <Checkbox text='Remember me' />
            <Button text='Sign In' />
            <FormFooter />
          </Form>
        </fieldset>
      </div>
    </div>
  )
}

export default SignInPage
