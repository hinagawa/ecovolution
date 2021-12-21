import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import SignInPage from './pages/SignIn/SignInPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exaсt path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  )
}

export default App
