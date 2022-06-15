/* eslint-disable no-shadow */
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

function RouteAdapter({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const adaptedHistory = useMemo(
    () => ({
      replace(location) {
        navigate(location, { replace: true, state: location.state })
      },
      push(location) {
        navigate(location, { replace: false, state: location.state })
      },
    }),
    [navigate],
  )
  return children({ history: adaptedHistory, location })
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryParamProvider ReactRouterRoute={RouteAdapter}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryParamProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
