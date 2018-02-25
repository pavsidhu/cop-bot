// @flow
import React from 'react'
import styled, { css } from 'styled-components'

import statusRunningIcon from '../assets/icons/status_running.svg'
import statusSuccessIcon from '../assets/icons/status_success.svg'
import statusFailureIcon from '../assets/icons/status_failure.svg'
import statusWaitingIcon from '../assets/icons/status_waiting.svg'

type Props = {
  title: string,
  subtitle: string,
  status?: 'waiting' | 'running' | 'success' | 'failure' | null
};

const Container = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  padding: 16px 16px;

  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.02);
  }
`

const Status = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  ${props => {
    switch (props.status) {
      case 'running':
        return css`
          background-image: url(${statusRunningIcon}),
            linear-gradient(to top, #4481eb 0%, #04befe 100%);
        `
      case 'success':
        return css`
          background-image: url(${statusSuccessIcon}),
            linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        `
      case 'failure':
        return css`
          background-image: url(${statusFailureIcon}),
            linear-gradient(to top, #f77062 0%, #fe5196 100%);
        `
      case 'waiting':
      default:
        return css`
          background-image: url(${statusWaitingIcon}),
            linear-gradient(60deg, #29323c 0%, #485563 100%);
        `
    }
  }}};
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 18px;
  color: #313131;
`

const Subtitle = styled.p`
  font-size: 14px;
  color: #818181;
  margin-top: 4px;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
`

const Option = styled.div`
  margin-left: 24px;
  color: #818181;
  cursor: pointer;
`

const ListItem = (props: Props) => (
  <Container>
    {props.status ? <Status status={props.status} /> : null}
    <Description>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Description>

    <Options>
      <Option onClick={props.onClickDelete}>Delete</Option>
    </Options>
  </Container>
)

ListItem.defaultProps = {
  status: null
}

export default ListItem
