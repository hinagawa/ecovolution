import React from 'react'
import { BrowserRouter as Router,
  Route,
  Routes } from 'react-router-dom'

import AuthPage from './pages/Auth/AuthPage'
import ResetPassword from './pages/Auth/ResetPassword'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth/*' element={<AuthPage />} />
        <Route
          path='/reset-password'
          element={<ResetPassword />}
        />
        <Route
          path='/forgot-password'
          element={<ForgotPassword />}
        />
        <Route
          path='/profile/*'
          element={<Profile />}
        />
      </Routes>
    </Router>
  )
}

export default App
