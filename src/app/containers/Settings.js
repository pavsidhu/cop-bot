import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Paper from '../components/Paper'
import TextField from '../components/TextField'
import Toggle from '../components/Toggle'

@inject('optionsStore')
@withRouter
@observer
class Settings extends React.Component {
  constructor() {
    super()

    this.updateReCaptcha = this.updateReCaptcha.bind(this)
  }

  updateReCaptcha() {
    this.props.optionsStore.reCaptcha = !this.props.optionsStore.reCaptcha
  }

  render() {
    const { optionsStore } = this.props

    return (
      <Paper>
        <Toggle
          onClick={this.updateReCaptcha}
          textOn="ReCaptcha will be enabled"
          textOff="ReCaptcha will be disabled"
          state={optionsStore.reCaptcha}
          darkTheme
        />
      </Paper>
    )
  }
}

export default Settings
