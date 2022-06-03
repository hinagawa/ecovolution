import React from 'react'
import { BrowserRouter as Router,
  Route,
  Routes,
  Navigate } from 'react-router-dom'

import AuthPage from './pages/Auth/AuthPage'
import ResetPassword from './pages/Auth/ResetPassword'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Profile from './pages/Profile/Profile'
import Places from './pages/Places/Places'
import Articles from './pages/Articles/Articles'
import Article from './pages/Articles/Article'
import Map from './pages/Map/MapView'
import PrivateRoute from './components/PrivateRoute'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/auth/sign-in' replace />}
        />
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
        <Route exact element={<PrivateRoute />}>
          <Route
            exact
            path='/articles/:id'
            element={<Article />}
          />
        </Route>
        <Route exact element={<PrivateRoute />}>
          <Route exact path='/map' element={<Map />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
