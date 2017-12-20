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
class AccountsList extends React.Component {
  constructor() {
    super()

    this.getAccounts = this.getAccounts.bind(this)
  }

  getAccounts() {
    const { accountsStore, ordersStore } = this.props

    if (accountsStore.isEmpty()) return <Empty>No accounts have been added</Empty>

    return accountsStore.accounts.map(account => (
      <ListItem
        title={account.name}
        subtitle={`${account.addressOne} ${account.city}`}
        key={account.id}
        onClickDelete={() => {
          accountsStore.remove(account.id)
          ordersStore.orders.map(order => {
            if (order.accountId === account.id) ordersStore.remove(order.id)
          })
        }}
      />
    ))
  }

  render() {
    const { accountsStore } = this.props

    return (
      <Paper noMargin={!accountsStore.isEmpty()}>
        {this.getAccounts()}

        <FloatingActionButton link="/accounts/add" icon={AddIcon} />
      </Paper>
    )
  }
}

export default AccountsList
