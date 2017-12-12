// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  link: string,
  icon: string
};

const FloatingActionButton = (props: Props) => (
  <Link to={props.link}>
    <Button>
      <Icon src={props.icon} />
    </Button>
  </Link>
)

const Icon = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 100ms;
`

const Button = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 100ms;

  &:hover {
    transform: scale(1.05);
  }
`

export default FloatingActionButton
