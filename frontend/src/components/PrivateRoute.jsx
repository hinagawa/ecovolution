import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function PrivateRoute({ isAuthPage }) {
  const isAuth = !!localStorage.getItem('Authorization')
  if (isAuthPage) {
    return isAuth ? <Navigate to='/articles' /> : <Outlet />
  }
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to='/auth/sign-in' />
  )
}

PrivateRoute.propTypes = {
  isAuthPage: PropTypes.bool,
}

PrivateRoute.defaultProps = {
  isAuthPage: false,
}
export default PrivateRoute
