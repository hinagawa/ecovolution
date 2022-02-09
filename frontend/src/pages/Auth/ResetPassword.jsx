import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import customFetch from '../../services/api/fetchWrapper'

import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Error from '../../components/Error/Error'

import styles from './styles.module.css'

function ResetPassword() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const [error, setError] = useState('')

  const onSubmit = (data) => {
    const { newPassword, confirmPassword } = data
    if (newPassword !== confirmPassword) {
      return setError(
        'Password and confirm password do not match',
      )
    }
    customFetch
      .post('api/reset-password', { newPassword })
      .then((res) => res.json())
      .then((resJson) => (resJson.success
        ? navigate('/auth/sign-in')
        : setError(resJson.message)))
  }
  useEffect(() => {
    register('newPassword', {
      required: 'Please, provide new password',
    })
    register('confirmPassword', {
      required: 'Please, provide confirm password',
    })
  }, [])
  return (
    <div className={styles.gridContainer}>
      <div className={styles.formContainer}>
        <h1>Ecovolution</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h5> Reset password</h5>
          <Input
            name='newPassword'
            placeholder='New password'
            type='password'
            onChange={(e) => setValue('newPassword', e.target.value)}
          />
          {errors.newPassword && <Error message={errors.newPassword.message} /> }
          <Input
            name='confirmPassword'
            placeholder='Confirm password'
            type='password'
            onChange={(e) => setValue('confirmPassword', e.target.value)}
          />
          {errors.confirmPassword && <Error message={errors.confirmPassword.message} /> }
          <Button text='Reset pasword' />
        </Form>
        {error && <Error message={error} />}
      </div>
    </div>
  )
}

export default ResetPassword
