// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

type Props = {
  title: string
};

const Navigation = (props: Props) => (
  <Container>
    <Title>{props.title}</Title>

    <Tabs>
      <Tab active={props.location.pathname === '/orders'}>
        <Link to="/orders">Orders</Link>
      </Tab>
      <Tab active={props.location.pathname === '/accounts'}>
        <Link to="/accounts">Accounts</Link>
      </Tab>
    </Tabs>
  </Container>
)

const Container = styled.div`
  background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
  -webkit-app-region: drag;
  -webkit-user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 56px;
  color: white;
`

const Tabs = styled.div`
  display: flex;
  align-self: stretch;
  overflow: hidden;
`

const Tab = styled.div`
  flex: 1;
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

export default withRouter(Navigation)
