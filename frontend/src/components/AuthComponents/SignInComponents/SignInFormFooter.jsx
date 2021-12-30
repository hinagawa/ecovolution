import React from 'react'

import styles from './styles.module.css'

function SignInFormFooter() {
  return (
    <div className={styles.inlineContainer}>
      <p>Do not have an account?</p>
      <a href="/sign-up">Sign Up</a>
    </div>
  )
}

export default SignInFormFooter
