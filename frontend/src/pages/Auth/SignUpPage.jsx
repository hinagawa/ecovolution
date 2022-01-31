import React from 'react'

import img from '../../assets/images/img.png'

import Form from '../../components/AuthComponents/SignUpComponents/SignUpForm'

import styles from './styles.module.css'

function SignUpPage() {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.logoContainer}>
        <h1>Ecovolution</h1>
        <img src={img} alt="Girl with horse" />
      </div>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
  )
}

export default SignUpPage