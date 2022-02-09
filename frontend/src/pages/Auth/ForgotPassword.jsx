import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import customFetch from '../../services/api/fetchWrapper'

import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import Error from '../../components/Error/Error'

import styles from './styles.module.css'
function ResetPassword() {
  const { register, handleSubmit, setValue } = useForm()
  const [error, setError] = useState('')
  const onSubmit = (data) => {
    const { email } = data
    customFetch
      .post('api/forgot-password', { email })
      .then((res) => res.json())
      .then((resJson) => (resJson.success
        ? console.log(resJson)
        : setError(resJson.message)))
  }
  useEffect(() => {
    register('email', {
      required: 'Please, provide your name',
    })
  }, [])
  return (
    <div className={styles.gridContainer}>
      <div className={styles.formContainer}>
        <h1>Ecovolution</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h5> Enter your email to reset password</h5>
          <Input
            name='email'
            placeholder='E-Mail'
            type='email'
            onChange={(e) => {
              setValue('email', e.target.value)
            }}
          />
          <div className={styles.forgotFooter}>
            <Button text='Send link' />
            <Link
              text='Back to Sign In'
              href='auth/sign-in'
            />
          </div>
          {error && <Error message={error} />}

        </Form>
      </div>
    </div>
  )
}

export default ResetPassword
