import React from 'react'
import PropTypes from 'prop-types'

import Input from '../common/Input/Input'
import Form from '../common/Form/Form'
import Checkbox from '../common/Checkbox/Checkbox'
import Button from '../common/Button/Button'
import FormFooter from './SignInFormFooter'

import styles from './styles.module.css'

function SignInForm({ className }) {
  return (
    <fieldset className={`${className} ${styles.fieldsetContainer}`}>
      <legend className={styles.legendFont}>
        Sign In
      </legend>
      <Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Checkbox text="Remember me" />
        <Button text="Sign In" />
        <FormFooter />
      </Form>
    </fieldset>
  )
}

SignInForm.propTypes = {
  className: PropTypes.string,
}

SignInForm.defaultProps = {
  className: '',
}
export default SignInForm
