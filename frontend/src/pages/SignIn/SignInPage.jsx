import React from 'react'

import logo from '../../assets/images/logo.png'
import img from '../../assets/images/img.png'

import Form from '../../components/SignInComponents/SignInForm'

function SignInPage() {
  return (
    <>
      <div>
        <img src={logo} alt="Logo" />
        <img src={img} alt="Girl with horse" />
      </div>
      <Form />
    </>
  )
}

export default SignInPage
