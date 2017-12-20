// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  children: string
};

const Text = styled.div`
  font-size: 16px;
  color: #818181;
  width: 80%;
  max-width: 400px;
  margin-bottom: 8px;
`

const Subheader = (props: Props) => <Text>{props.children}</Text>

export default Subheader
