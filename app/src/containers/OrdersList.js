// @flow
import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import Paper from '../components/Paper'
import ListItem from '../components/ListItem'
import FloatingActionButton from '../components/FloatingActionButton'
import Empty from '../components/Empty'
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
      return <Empty>Please add an account before creating an order</Empty>
    }

    if (ordersStore.isEmpty()) {
      return <Empty>No orders have been added</Empty>
    }

    return ordersStore.orders.map(order => (
      <ListItem
        title={order.keywords.join(', ')}
        subtitle={accountsStore.getById(order.accountId).name}
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

export default OrdersList
