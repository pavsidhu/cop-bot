// @flow
import React from 'react'
import styled from 'styled-components'
import ListItem from '../components/ListItem'
import FloatingActionButton from '../components/FloatingActionButton'
import AddIcon from '../assets/icons/add.svg'

const AccountsList = () => (
  <Container>
    <ListItem title="Pav Sidhu" subtitle="Visa 4444333322221111" />
    <ListItem title="John Smith" subtitle="Mastercard 4444333322221111" />
    <ListItem title="Michael Lee" subtitle="American Express 4444333322221111" />

    <FloatingActionButton link="/accounts/add" icon={AddIcon} />
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 24px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
`

export default AccountsList
