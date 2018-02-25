// @flow
import React from 'react'
import styled from 'styled-components'
import Routes from './routes'
import Navigation from './components/Navigation'

const Container = styled.div`
  margin-top: 120px;
`

class App extends React.Component {
  async componentWillMount() {
    try {
      const response = await fetch(
        'https://s3-eu-west-1.amazonaws.com/cop-bot/valid.json'
      )
      const data = await response.json()

      if ((await data.valid) === false) throw new Error()
    } catch (error) {
      alert(
        'Cop Bot requires an internet connection, check your WiFi and try again.'
      )
      window.close()
    }
  }

  render() {
    return (
      <div>
        <Navigation title="Cop Bot" />
        <Container>
          <Routes />
        </Container>
      </div>
    )
  }
}

export default App
