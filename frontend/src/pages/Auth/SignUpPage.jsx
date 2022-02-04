import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import customFetch from '../../services/api/fetchWrapper'

import img from '../../assets/images/Img.png'

import Input from '../../components/Input/Input'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button'
import Error from '../../components/Error/Error'

import styles from './styles.module.css'

function SignUpPage() {
  const { register, handleSubmit, setValue } = useForm()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  // TODO check password onChange
  const onSubmit = async (data) => {
    const { name, lastName, email, password } = data
    if (data.password === data.confirmPassword) {
      setError('')
      const res = await customFetch.post(
        'api/sign-up',
        {
          name,
          lastName,
          email,
          password,
        },
      )
      console.log(res, 'dsfdf')
      if (res.success) {
        setError('')
        navigate('sign-in')
        window.location.reload()
      } else {
        console.log(res)
      }
    } else {
      setError('Password and confirm password do not match')
      console.log(error, 'sadsads')
    }
  }
  useEffect(() => {
    register('name', { required: true })
    register('lastName')
    register('email')
    register('password', {
      required: true,
      minLength: 8,
    })
    register('confirmPassword', {
      required: true,
      minLength: 8,
    })
  }, [])

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
            <Button text='Sign Up'>Submit</Button>
            {error && <Error message={error} />}
          </Form>
        </fieldset>
      </div>
    </div>
  )
}
export default SignUpPage
