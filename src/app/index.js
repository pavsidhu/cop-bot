import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { MemoryRouter } from 'react-router-dom'
import stores from './stores'
import App from './App'
import './app.global.css'

render(
  <Provider {...stores}>
    <MemoryRouter initialEntries={['/app.html']}>
      <App />
    </MemoryRouter>
  </Provider>,
  document.getElementById('root')
)
