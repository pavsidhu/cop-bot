// @flow
import React from 'react'
import styled from 'styled-components'
import ListItem from '../components/ListItem'
import FloatingActionButton from '../components/FloatingActionButton'
import AddIcon from '../assets/icons/add.svg'

const OrdersList = () => (
  <Container>
    <ListItem title="Supreme 1" status="waiting" subtitle="Pav Sidhu" />
    <ListItem title="Supreme 2" status="running" subtitle="Pav Sidhu" />
    <ListItem title="Supreme 3" status="success" subtitle="Pav Sidhu" />
    <ListItem title="Supreme 4" status="failure" subtitle="Pav Sidhu" />

    <FloatingActionButton link="/orders/add" icon={AddIcon} />
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

export default OrdersList
