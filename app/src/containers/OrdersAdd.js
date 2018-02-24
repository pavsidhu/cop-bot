import React from 'react'
import { inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import Paper from '../components/Paper'
import TextField from '../components/TextField'
import SelectField from '../components/SelectField'
import CheckBox from '../components/CheckBox'
import Subheader from '../components/Subheader'
import Button from '../components/Button'

@inject('ordersStore', 'accountsStore')
@withRouter
class OrdersAdd extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {},
      accountIds: []
    }

    this.formChange = this.formChange.bind(this)
    this.formChangeAccountIds = this.formChangeAccountIds.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  formChange(event) {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  formChangeAccountIds(event) {
    const accountId = parseInt(event.target.value)

    this.setState({
      accountIds: event.target.checked
        ? [...this.state.accountIds, accountId]
        : [...this.state.accountIds.filter(Id => Id !== accountId)]
    })
  }

  formSubmit() {
    this.state.accountIds.map(accountId => this.props.ordersStore.add(this.state.form, accountId))

    this.props.history.goBack()
  }

  render() {
    const { accounts } = this.props.accountsStore

    return (
      <Paper backButton="Orders">
        <TextField
          name="keywords"
          placeholder="Keywords (Separated by commas)"
          onChange={this.formChange}
          value={this.state.form.keywords}
        />
        <SelectField
          name="category"
          placeholder="Category"
          onChange={this.formChange}
          value={this.state.form.category}
        >
          <option value="none">None</option>
          <option value="jackets">Jackets</option>
          <option value="tops_sweaters">Tops/Sweaters</option>
          <option value="sweatshirts">Sweatshirts</option>
          <option value="pants">Pants</option>
          <option value="t-shirts">T-Shirts</option>
          <option value="hats">Hats</option>
          <option value="bags">Bags</option>
          <option value="accessories">Accessories</option>
          <option value="skate">Skate</option>
        </SelectField>
        <TextField
          name="size"
          placeholder="Size (Optional)"
          onChange={this.formChange}
          value={this.state.form.size}
        />
        <TextField
          name="color"
          placeholder="Color (Optional)"
          onChange={this.formChange}
          value={this.state.form.color}
        />

        <Subheader>Accounts to Use</Subheader>

        {accounts.map(account => (
          <CheckBox
            value={account.id}
            label={account.name}
            key={account.id}
            checked={this.state.accountIds.includes(account.id)}
            onChange={e => {
              this.formChangeAccountIds(e)
            }}
          />
        ))}

        <Button text="Create Order" onClick={this.formSubmit} />
      </Paper>
    )
  }
}

export default OrdersAdd
