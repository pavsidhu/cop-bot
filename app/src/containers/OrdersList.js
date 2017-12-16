// @flow
import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import Paper from '../components/Paper'
import ListItem from '../components/ListItem'
import FloatingActionButton from '../components/FloatingActionButton'
import AddIcon from '../assets/icons/add.svg'

@inject('accountsStore', 'ordersStore')
@observer
class OrdersList extends React.Component {
  constructor() {
    super()

    this.getOrders = this.getOrders.bind(this)
  }

  getOrders() {
    const { ordersStore, accountsStore } = this.props

    if (accountsStore.isEmpty()) {
      return (
        <EmptyContainer>
          <EmptyIcon>¯\_(ツ)_/¯</EmptyIcon>
          <EmptyText>No orders have been added</EmptyText>
          {accountsStore.isEmpty() ? (
            <EmptyText>Please add an account before creating an order</EmptyText>
          ) : null}
        </EmptyContainer>
      )
    }

    if (ordersStore.isEmpty()) {
      return (
        <EmptyContainer>
          <EmptyIcon>¯\_(ツ)_/¯</EmptyIcon>
          <EmptyText>No orders have been added</EmptyText>
        </EmptyContainer>
      )
    }

    return ordersStore.orders.map(order => (
      <ListItem
        title={order.keywords.join(', ')}
        subtitle={accountsStore.accounts[order.accountId].name}
        key={order.id}
        status={order.state}
        onClickDelete={() => ordersStore.remove(order.id)}
      />
    ))
  }

  render() {
    const { ordersStore, accountsStore } = this.props

    return (
      <Paper noMargin={!ordersStore.isEmpty()}>
        {this.getOrders()}

        {accountsStore.isEmpty() ? null : (
          <FloatingActionButton link="/orders/add" icon={AddIcon} />
        )}
      </Paper>
    )
  }
}

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EmptyIcon = styled.p`
  font-size: 32px;
  color: #818181;
  margin-bottom: 8px;
`

const EmptyText = styled.p`
  font-size: 16px;
  color: #818181;
`

export default OrdersList
