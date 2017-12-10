// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  title: string,
  subtitle: string
};

const ListItem = (props: Props) => (
  <Container>
    <Status />
    <Description>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Description>

    <Options>
      <Option>Edit</Option>
      <Option>Delete</Option>
    </Options>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px;
  cursor: pointer;

  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.02);
  }
`

const Status = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #313131;
  margin-right: 16px;
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
  color: #313131;
`

export default ListItem
