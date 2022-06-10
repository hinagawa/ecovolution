import React, { useEffect } from 'react'
import { Routes,
  Route,
  useNavigate } from 'react-router-dom'

import img from '../../assets/images/Img.png'

import SignUpForm from '../../layouts/AuthLayouts/SignUpForm'
import SignInForm from '../../layouts/AuthLayouts/SignInForm'

import styles from './styles.module.css'

function AuthPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('Authorization')
    if (token) {
      navigate('/articles')
      window.location.reload(false)
    }
  })
  return (
    <div className={styles.rowContainer}>
      <div className={styles.logoContainer}>
        <h1>EcoRevolution</h1>
        <img src={img} alt='Girl with horse' />
      </div>
      <div className={styles.formContainer}>
        <fieldset className={styles.fieldsetContainer}>
          <Routes>
            <Route
              path='/sign-up'
              element={<SignUpForm />}
            />
            <Route
              path='/sign-in'
              element={<SignInForm />}
            />
          </Routes>
        </fieldset>
      </div>
    </div>
  )
}

export default AuthPage
