// @flow
import React from 'react'
import Paper from '../components/Paper'
import TextField from '../components/TextField'
import SelectField from '../components/SelectField'
import CheckBox from '../components/CheckBox'
import Subheader from '../components/Subheader'
import Button from '../components/Button'

type Props = {};

type State = {
  form: {}
};

class OrdersAdd extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      form: {},
    }

    this.formChange = this.formChange.bind(this)
  }

  formChange(event: SyntheticInputEvent): void {
    this.setState({
      form: {
        [event.target.name]: event.target.value,
      },
    })
  }

  render() {
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
          <option value="accessories">Accessories</option>
          <option value="hats">Hats</option>
          <option value="pants">Pants</option>
          <option value="jacket">Jacket</option>
          <option value="shirts">Shirts</option>
          <option value="shoes">Shoes</option>
          <option value="skate">Skate</option>
          <option value="sweatshirts">Sweatshirts</option>
        </SelectField>
        <TextField
          name="size"
          placeholder="Size"
          onChange={this.formChange}
          value={this.state.form.size}
        />
        <TextField
          name="color"
          placeholder="Color"
          onChange={this.formChange}
          value={this.state.form.color}
        />

        <Subheader>Accounts to Use</Subheader>

        <CheckBox name="pavsidhu" value="1" />

        <Button text="Create Order" />
      </Paper>
    )
  }
}

export default OrdersAdd
