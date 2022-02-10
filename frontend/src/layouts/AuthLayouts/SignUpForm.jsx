import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import customFetch from '../../services/api/fetchWrapper'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Error from '../../components/Error/Error'

import styles from './styles.module.css'

function SignUpForm() {
  const { register, handleSubmit, setValue } = useForm()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  // TODO check password onChange
  const onSubmit = (data) => {
    const { name, lastName, email, password } = data
    if (data.password !== data.confirmPassword) {
      return setError(
        'Password and confirm password do not match',
      )
    }
    customFetch
      .post('api/sign-up', {
        name,
        lastName,
        email,
        password,
      })
      .then((res) => res.json())
      .then((resJson) => (resJson.success
        ? navigate('/')
        : setError(resJson.message)))
  }

  useEffect(() => {
    register('name', {
      required: 'Please, provide your name',
    })
    register('lastName')
    register('email', {
      required: 'Please, provide your email',
    })
    register('password', {
      required: 'Please, provide your password',
      minLength: 8,
    })
    register('confirmPassword', {
      required: 'Please, confirm your password',
      minLength: 8,
    })
  }, [])

  return (
    <>
      <legend className={styles.legendFont}>Sign Up</legend>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          placeholder='Name'
          name='name'
          onChange={(e) => {
            setValue('name', e.target.value)
          }}
        />
        <Input
          type='text'
          placeholder='Last Name'
          name='lastName'
          onChange={(e) => {
            setValue('lastName', e.target.value)
          }}
        />
        <Input
          type='email'
          placeholder='E-mail'
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
        <Input
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          onChange={(e) => {
            setValue('confirmPassword', e.target.value)
          }}
        />
        <Button text='Sign Up' />
        {error && <Error message={error} />}
      </Form>
      <div className={styles.inlineContainer}>
        <p>Already have an account?</p>
        <a href='/auth/sign-in'>Sign In</a>
      </div>
    </>
  )
}

export default SignUpForm
