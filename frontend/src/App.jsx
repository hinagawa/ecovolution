import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import SignInPage from './pages/Auth/SignInUpPage/SignInPage'
import SignUpPage from './pages/Auth/SignInUpPage/SignUpPage'
import ResetPassword from './pages/Auth/ResetForgotPasswordPage/ResetPassword'

import './index.module.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exaсt
          path="/sign-in"
          element={<SignInPage />}
        />
      </Routes>
      <Routes>
        <Route
          exaсt
          path="/sign-up"
          element={<SignUpPage />}
        />
      </Routes>
      <Routes>
        <Route
          exaсt
          path="/reset-password"
          element={<ResetPassword />}
        />
      </Routes>
      <Routes>
        <Route
          exaсt
          path="/forgot-password"
          element={<SignUpPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
