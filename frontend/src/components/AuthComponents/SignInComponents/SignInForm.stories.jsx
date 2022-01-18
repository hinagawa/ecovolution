import React from 'react'

import SignInFormComponent from './SignInForm'

const disabled = {
  table: {
    disable: true,
  },
}

export default {
  title: 'Components/SignInComponents/SignInForm',
  component: SignInFormComponent,
  argTypes: {
    onChange: disabled,
  },
}

export function SignInForm() {
  return <SignInFormComponent />
}
