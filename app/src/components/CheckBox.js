import React from 'react'
import styled from 'styled-components'

import tickIcon from '../assets/icons/checkbox.svg'

// type Props = {
//   value: string | number,
//   label: string,
//   onChange: SyntheticInputEvent => void
// };

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 400px;
  margin-bottom: 16px;
`

const Input = styled.input`
  width: 24px;
  height: 24px;
  background-color: #ededed;
  margin: 0;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;

  &:active,
  &:focus {
    outline: 2px #a3a3a3 solid;
  }

  &:checked {
    background-image: url(${tickIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }
`

const Label = styled.label`
  margin-left: 8px;
  font-size: 18px;
  -webkit-user-select: none;
`

const CheckBox = props => (
  <Container>
    <Input
      name={props.name}
      value={props.value}
      type="checkbox"
      onChange={event => props.onChange(event)}
      checked={props.checked}
    />
    <Label>{props.label}</Label>
  </Container>
)

export default CheckBox
