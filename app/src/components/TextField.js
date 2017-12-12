// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string,
  type?: string,
  placeholder?: string,
  value?: string,
  autofocus?: boolean,
  onChange: ?(SyntheticInputEvent) => void
};

const TextField = (props: Props) => (
  <Input
    name={props.name}
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.onChange}
    value={props.value}
    autofocus={props.autofocus}
  />
)

TextField.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
  value: '',
  autofocus: false,
}

const Input = styled.input`
  width: 80%;
  max-width: 400px;
  background-color: #ededed;
  color: #313131;
  font-size: 18px;
  padding: 8px 16px;
  border: none;
  box-sizing: border-box;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  ::placeholder {
    color: #a3a3a3;
  }

  &:focus {
    outline: 2px #a3a3a3 solid;
  }
`

export default TextField
