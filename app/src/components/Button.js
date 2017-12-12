// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
};

const Button = (props: Props) => <Container>{props.text}</Container>

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 180px;
  background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
  font-size: 18px;
  color: white;
  padding: 8px 0;
  cursor: pointer;
  -webkit-user-select: none;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 100ms;

  &:hover {
    transform: scale(1.05);
  }
`

export default Button
