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
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact element={<PrivateRoute isAuthPage />}>
          <Route path='/auth/*' element={<AuthPage />} />
        </Route>
        <Route exact element={<PrivateRoute isAuthPage />}>
          <Route
            path='/reset-password'
            element={<ResetPassword />}
          />
        </Route>
        <Route exact element={<PrivateRoute isAuthPage />}>
          <Route
            path='/forgot-password'
            element={<ForgotPassword />}
          />
        </Route>

        <Route exact element={<PrivateRoute />}>
          <Route
            exact
            path='/profile/*'
            element={<Profile />}
          />
        </Route>
        <Route exact element={<PrivateRoute />}>
          <Route
            exact
            path='/places'
            element={<Places />}
          />
        </Route>
        <Route exact element={<PrivateRoute />}>
          <Route
            exact
            path='/articles'
            element={<Articles />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
