// @flow
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  textOn: string,
  textOff: string,
  state: boolean,
  onClick: () => void,
  darkTheme: boolean,
  nav: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  max-width: 400px;
  margin-bottom: 24px;
  cursor: pointer;

  ${props =>
    props.nav &&
    css`
      width: auto;
      max-width: auto;
      margin-bottom: 0;
    `};
`

const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: white;
  margin-right: 16px;
  flex: 1;

  ${props =>
    (props.darkTheme &&
      css`
        color: #313131;
      `) ||
    (props.nav &&
      css`
        flex: none;
        transform: translateX(24px);
      `)};
`

const Handle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 48px;
  animation: transform 1s forwards;

  ${props =>
    props.on
      ? css`
          transform: translateX(32px);
          background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        `
      : css`
          transform: translateX(20px);
          background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
        `};
`

const Track = styled.div`
  width: 32px;
  height: 8px;
  background-color: white;
  border-radius: 4px;

  ${props =>
    props.darkTheme &&
    css`
      background-color: #d2d2d2;
    `};
`

const Toggle = (props: Props) => (
  <Container onClick={props.onClick} nav={props.nav}>
    <Text darkTheme={props.darkTheme} nav={props.nav}>
      {props.state ? props.textOn : props.textOff}
    </Text>
    <Handle on={props.state} />
    <Track darkTheme={props.darkTheme} />
  </Container>
)

export default Toggle
