import React from 'react'

import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'

import styles from './styles.module.css'
// TODO button size
function ResetPassword() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.formContainer}>
        <h1>Ecovolution</h1>
        <Form>
          <h5> Enter your email to reset password</h5>
          <Input id='email' placeholder='Email' />
          <div className={styles.forgotFooter}>
            <Button text='Send reset link' />
            <div>
              <Link
                text='Back to Sign In'
                href='/sign-in'
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default ResetPassword
