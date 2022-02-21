import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import customFetch from '../../services/api/fetchWrapper'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Error from '../../components/Error/Error'

import styles from './styles.module.css'

function SignInForm() {
  const { register, handleSubmit, setValue } = useForm()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  // TODO check password onChange
  const onSubmit = (data) => {
    const { email, password } = data
    customFetch
      .post('api/sign-in', {
        email,
        password,
      })
      .then((res) => res.json())
      .then((resJson) => (resJson.success
        ? navigate('/')
        : setError(resJson.message)))
  }

  useEffect(() => {
    register('email', { required: true })
    register('password', {
      required: true,
      minLength: 8,
    })
  }, [])
  return (
    <>
      <legend className={styles.legendFont}>Sign In</legend>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='email'
          placeholder='E-Mail'
          name='email'
          onChange={(e) => {
            setValue('email', e.target.value)
          }}
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          onChange={(e) => {
            setValue('password', e.target.value)
          }}
        />
        <Button> Sign In </Button>
        {error && <Error message={error} />}
      </Form>
      <div className={styles.inlineContainer}>
        <p>Do not have an account?</p>
        <a href='/auth/sign-up'>Sign Up</a>
      </div>
      <a href='/forgot-password'>Forgot password?</a>
    </>
  )
}

export default SignInForm
