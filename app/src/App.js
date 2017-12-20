// @flow
import React from 'react'
import styled from 'styled-components'

import Routes from './routes'
import Navigation from './components/Navigation'

const Container = styled.div`
  margin-top: 120px;
`

const App = () => (
  <div>
    <Navigation title="Cop Bot" />
    <Container>
      <Routes />
    </Container>
  </div>
)

export default App
