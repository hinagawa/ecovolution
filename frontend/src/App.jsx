import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SignInPage from './pages/Auth/SignInPage'
import SignUpPage from './pages/Auth/SignUpPage'
import ResetPassword from './pages/Auth/ResetPassword'
import ForgotPassword from './pages/Auth/ForgotPassword'

import './index.module.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exaсt
          path='/sign-in'
          element={<SignInPage />}
        />
        <Route
          exaсt
          path='/sign-up'
          element={<SignUpPage />}
        />
        <Route
          exaсt
          path='/reset-password'
          element={<ResetPassword />}
        />
        <Route
          exaсt
          path='/forgot-password'
          element={<ForgotPassword />}
        />
      </Routes>
    </Router>
  )
}

export default App
