import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import SignInPage from './pages/Auth/SignInPage'
import SignUpPage from './pages/Auth/SignUpPage'

import './index.module.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exaсt path="/sign-in" element={<SignInPage />} />
      </Routes>
      <Routes>
        <Route exaсt path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App
