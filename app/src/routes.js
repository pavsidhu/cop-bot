/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import AccountsList from './containers/AccountsList'
import OrdersList from './containers/OrdersList'

export default () => (
  <Switch>
    <Redirect from="/" exact to="/orders" />
    <Route path="/accounts" component={AccountsList} />
    <Route path="/orders" component={OrdersList} />
  </Switch>
)
