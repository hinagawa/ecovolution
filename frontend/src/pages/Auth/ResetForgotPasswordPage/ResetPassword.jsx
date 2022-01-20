import React from 'react'

import Form from '../../../components/common/Form/Form'
import Input from '../../../components/common/Input/Input'
import Button from '../../../components/common/Button/Button'

import styles from './styles.module.css'

function ResetPassword() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.formContainer}>
        <h1>Ecovolution</h1>
        <Form>
          <h5> Reset password</h5>
          <Input id="new_password" placeholder="New password" />
          <Input id="confirm_password" placeholder="Confirm password" />
          <Button text="Reset pasword" />
        </Form>
      </div>
    </div>
  )
}

export default ResetPassword
