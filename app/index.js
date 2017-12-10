import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { HashRouter as Router } from 'react-router-dom'
import App from './src/App'
import './app.global.css'

render(
  <AppContainer>
    <Router>
      <App />
    </Router>
  </AppContainer>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept('./src/App', () => {
    const NextApp = require('./src/App') // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
