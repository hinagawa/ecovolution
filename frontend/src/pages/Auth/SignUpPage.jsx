import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import img from '../../assets/images/img.png'

import Input from '../../components/Input/Input'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button'

import styles from './styles.module.css'

function SignUpPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  // TODO fetch
  const onSubmit = (data) => {
    if(data.password !== data.confirmPassword) {
      return 
    }

    console.log(data.lastName)
  }
  useEffect(() => {
    register('name', { required: true })
    register('lastName')
    register('email')
    register('password', { required: true, minLength: 8 })
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
            {errors.password && errors.password.message}
            <Input
              type='password'
              placeholder='Confirm password'
              name='confirmPassword'
              onChange={(e) => {
                setValue('confirmPassword', e.target.value)
              }}
            />
            <Button>Submit</Button>
          </Form>
        </fieldset>
      </div>
    </div>
  )
}
export default SignUpPage
