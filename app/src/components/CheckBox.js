// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string,
  value?: string,
  placeholder?: string,
  onChange?: SyntheticInputEvent => void
};

const CheckBox = (props: Props) => (
  <Container>
    <Input
      name={props.name}
      id={props.name}
      type="checkbox"
      onChange={props.onChange}
      value={props.value}
    />
    <Label htmlFor={props.name}>{props.placeholder}</Label>
  </Container>
)

CheckBox.defaultProps = {
  value: '',
  placeholder: 'Checkbox',
  onChange: () => null,
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 400px;
  margin-bottom: 24px;
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
    background-image: url('./src/assets/icons/checkbox.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
`

const Label = styled.label`
  margin-left: 8px;
  font-size: 18px;
  cursor: pointer;
  -webkit-user-select: none;
`

export default CheckBox
