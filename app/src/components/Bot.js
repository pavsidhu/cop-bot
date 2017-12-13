// @flow
import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { CronJob } from 'cron'

import Button from './Button'

@inject('ordersStore', 'accountsStore')
@observer
class Bot extends React.Component {
  constructor() {
    super()

    this.state = {
      isBotEnabled: false,
    }

    this.scheduler = null

    this.startBot = this.startBot.bind(this)
    this.stopBot = this.stopBot.bind(this)
    this.startOrder = this.startOrder.bind(this)
    this.updateBot = this.updateBot.bind(this)
  }

  startBot() {
    this.scheduler = new CronJob({
      // cronTime: '* 10-11 * * 4',
      cronTime: '* * * * *',
      timezone: 'Europe/London',
      runOnInit: true,
      context: this,
      onTick: this.startOrder,
    })

    this.setState(() => ({ isBotEnabled: true }))
  }

  stopBot() {
    this.scheduler.stop()

    this.setState(() => ({ isBotEnabled: false }))
  }

  async startOrder() {
    await this.props.ordersStore.orders.map(order => {
      order.state = 'running'

      setInterval(() => {
        order.state = true ? 'success' : 'fail'
      }, 5000)
    })
    await this.stopBot()
  }

  updateBot() {
    this.setState(state => ({ isBotEnabled: !state.isBotEnabled }))
    this.state.isBotEnabled ? this.stopBot() : this.startBot()
  }

  render() {
    return (
      <Container>
        <Button
          onClick={this.updateBot}
          text={this.state.isBotEnabled ? 'Stop Bot' : 'Start Bot'}
        />
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 24px 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Bot
