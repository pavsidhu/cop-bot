// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import Bot from './Bot'

type Props = {
  title: string
}

const Container = styled.div`
  background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
  -webkit-app-region: drag;
  -webkit-user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
`

const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0 24px;
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 56px;
  color: white;
`

const SettingsButton = styled.img`
  margin-left: 24px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`

const Tabs = styled.div`
  display: flex;
  align-self: stretch;
  overflow: hidden;

  * {
    flex: 1;
  }
`

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 16px;
  height: 40px;
  color: white;

  * {
    cursor: pointer;
  }

  ${props =>
    props.active &&
    css`
      background-color: rgba(255, 255, 255, 0.2);
    `};
`

const Navigation = (props: Props) => (
  <Container>
    <Main>
      <Title>{props.title}</Title>
      <Bot />
    </Main>

    <Tabs>
      <Link to="/orders">
        <Tab active={props.location.pathname.includes('/orders')}>Orders</Tab>
      </Link>
      <Link to="/accounts">
        <Tab active={props.location.pathname.includes('/accounts')}>
          Accounts
        </Tab>
      </Link>
      <Link to="/settings">
        <Tab active={props.location.pathname.includes('/settings')}>
          Settings
        </Tab>
      </Link>
    </Tabs>
  </Container>
)

export default withRouter(Navigation)
