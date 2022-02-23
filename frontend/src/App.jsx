import React from 'react'
import { BrowserRouter as Router,
  Route,
  Routes } from 'react-router-dom'

import AuthPage from './pages/Auth/AuthPage'
import ResetPassword from './pages/Auth/ResetPassword'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Profile from './pages/Profile/Profile'
import Places from './pages/Places/Places'
import Articles from './pages/Articles/Articles'

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
        <Route path='/profile/*' element={<Profile />} />
        <Route path='/places' element={<Places />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </Router>
  )
}

export default App
