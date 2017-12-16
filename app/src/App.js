// @flow
import React from 'react'
import styled from 'styled-components'

import Routes from './routes'
import Navigation from './components/Navigation'

const App = () => (
  <div>
    <Navigation title="Cop Bot" />
    <Container>
      <Routes />
    </Container>
  </div>
)

const Container = styled.div`
  margin-top: 120px;
`

export default App
