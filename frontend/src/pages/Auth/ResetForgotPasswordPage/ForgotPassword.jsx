import React from 'react'

import Form from '../../../components/common/Form/Form'
import Input from '../../../components/common/Input/Input'
import Button from '../../../components/common/Button/Button'
import Link from '../../../components/common/Link/Link'

import styles from './styles.module.css'
// TODO button size
function ResetPassword() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.formContainer}>
        <h1>Ecovolution</h1>
        <Form>
          <h5> Enter your email to reset password</h5>
          <Input id="email" placeholder="Email" />
          <div className={styles.forgotFooter}>
            <Button text="Send" />
            <Link text="Back to sign in" href="/sign-in" />
          </div>
        </Form>
      </div>
    </div>
  )
}

export default ResetPassword
