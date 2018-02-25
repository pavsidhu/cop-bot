// @flow
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Icon = styled.p`
  font-size: 32px;
  color: #818181;
  margin-bottom: 8px;
`

const Text = styled.p`
  font-size: 16px;
  color: #818181;
`

const Empty = props => (
  <Container>
    <Icon>¯\_(ツ)_/¯</Icon>
    <Text>{props.children}</Text>
  </Container>
)

export default Empty
