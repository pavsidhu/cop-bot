// @flow
import React from 'react'
import styled from 'styled-components'

import selectIcon from '../assets/icons/select.svg'

type Props = {
  name: string,
  value?: string,
  onChange?: SyntheticInputEvent => void,
  autofocus?: boolean,
  children: React.Node
};

const Select = styled.select`
  width: 80%;
  max-width: 400px;
  background-color: #ededed;
  color: #313131;
  font-size: 18px;
  padding: 8px 56px 8px 16px;
  border: none;
  margin-bottom: 24px;
  border-radius: 0;
  -webkit-appearance: none;
  background-image: url(${selectIcon});
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;

  &:focus {
    outline: 2px #a3a3a3 solid;
  }
`

const SelectField = (props: Props) => (
  <Select
    name={props.name}
    onChange={props.onChange}
    value={props.value}
    autofocus={props.autofocus}
  >
    {props.children}
  </Select>
)

SelectField.defaultProps = {
  value: '',
  onChange: () => null,
  autofocus: false
}

export default SelectField
