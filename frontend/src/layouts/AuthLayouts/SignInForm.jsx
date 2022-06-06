import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { GoogleOutlined } from '@ant-design/icons'
import api from '../../services/api/fetchWrapper'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import Form from '../../components/Form/Form'
import Error from '../../components/Error/Error'

import styles from './styles.module.css'

function SignInForm() {
  const { register, handleSubmit, setValue } = useForm()
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    const { email, password } = data
    await api
      .post('api/sign-in', {
        email,
        password,
      })
      .then((res) => res.json())
      .then((resJson) => (resJson.success
        ? localStorage.setItem(
          'Authorization',
          resJson.token,
        )
        : setError(resJson.message)))
  }

  const handleGoogle = async () => {
    await api.get('api/auth/google')
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
      <legend className={styles.legendFont}>Войти</legend>
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
          placeholder='Пароль'
          name='password'
          onChange={(e) => {
            setValue('password', e.target.value)
          }}
        />
        <Button> Войти </Button>
      </Form>

      <div className={styles.buttonGroup}>
        <form action='/auth/google' method='GET'>
          <Button onClick={handleGoogle}>
            <GoogleOutlined />
          </Button>
        </form>
      </div>
      {error && <Error message={error} />}
      <div className={styles.inlineContainer}>
        <p>У вас нет аккаунта?</p>
        <Link href='/auth/sign-up'>Зарегистрироваться</Link>
      </div>
      <Link href='/forgot-password'>Забыли пароль?</Link>
    </>
  )
}

export default SignInForm
