import React from 'react'
import { Routes, Route } from 'react-router-dom'

import img from '../../assets/images/Img.png'

import SignUpForm from '../../layouts/AuthLayouts/SignUpForm'
import SignInForm from '../../layouts/AuthLayouts/SignInForm'

import styles from './styles.module.css'

function AuthPage() {
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
          <Routes>
            <Route path='/sign-up' element={<SignUpForm />} />
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
