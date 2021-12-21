import React from 'react'

import Button from '../common/Button/Button'

import styles from './styles.module.css'

function SignInFormFooter() {
  return (
    <div className={styles.inlineContainer}>
      <Button text="Sign In" />
      <div>
        <p>Do not have an account?</p>
        <a href="/sign-up">Sign Up</a>
      </div>
    </div>
  )
}

export default SignInFormFooter
