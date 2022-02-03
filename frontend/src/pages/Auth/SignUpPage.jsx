import React from 'react'

import img from '../../assets/images/Img.png'

import Input from '../../components/Input/Input'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button'

import styles from './styles.module.css'

function SignUpPage() {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.logoContainer}>
        <h1>Ecovolution</h1>
        <img src={img} alt='Girl with horse' />
      </div>
      <div className={styles.formContainer}>
        <fieldset className={styles.fieldsetContainer}>
          <legend className={styles.legendFont}>
            Sign Up
          </legend>
          <Form>
            <Input placeholder='Name' />
            <Input placeholder='E-mail' />
            <Input placeholder='Password' />
            <Input placeholder='Confirm password' />
            <Button text='Sign Up' />
          </Form>
        </fieldset>
      </div>
    </div>
  )
}

export default SignUpPage
