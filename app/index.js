import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import { HashRouter as Router } from 'react-router-dom'
import { accountsStore, ordersStore } from './src/stores'
import App from './src/App'
import './app.global.css'

const stores = {
  accountsStore,
  ordersStore,
}

render(
  <AppContainer>
    <Provider {...stores}>
      <Router>
        <App />
      </Router>
    </Provider>
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
