/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import AccountsList from './containers/AccountsList'
import AccountsAdd from './containers/AccountsAdd'
import OrdersList from './containers/OrdersList'
import OrdersAdd from './containers/OrdersAdd'

export default () => (
  <Switch>
    <Redirect from="/" exact to="/orders" />
    <Route exact path="/accounts" component={AccountsList} />
    <Route exact path="/accounts/add" component={AccountsAdd} />
    <Route exact path="/orders" component={OrdersList} />
    <Route exact path="/orders/add" component={OrdersAdd} />
  </Switch>
)
