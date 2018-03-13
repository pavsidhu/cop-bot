import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import AccountsList from './containers/AccountsList'
import AccountsAdd from './containers/AccountsAdd'
import OrdersList from './containers/OrdersList'
import OrdersAdd from './containers/OrdersAdd'
import Settings from './containers/Settings'

const Routes = () => (
  <Switch>
    <Redirect from="/app.html" exact to="/orders" />
    <Route exact path="/accounts" component={AccountsList} />
    <Route exact path="/accounts/add" component={AccountsAdd} />
    <Route exact path="/orders" component={OrdersList} />
    <Route exact path="/orders/add" component={OrdersAdd} />
    <Route exact path="/settings" component={Settings} />
  </Switch>
)

export default Routes
