// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { inject, observer } from 'mobx-react'
import { CronJob } from 'cron'
import Toggle from '../components/Toggle'
import supremeBot from '../bots/supreme'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const StartBot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 180px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #fff3;
  color: white;
  padding: 8px 32px;
  margin-left: 24px;
  cursor: pointer;
  -webkit-user-select: none;
`

@inject('ordersStore', 'accountsStore', 'optionsStore')
@observer
class Bot extends React.Component {
  constructor() {
    super()

    this.scheduler = null

    this.startBot = this.startBot.bind(this)
    this.stopBot = this.stopBot.bind(this)
    this.startOrder = this.startOrder.bind(this)
    this.updateBot = this.updateBot.bind(this)
  }

  startBot() {
    this.props.optionsStore.isBotEnabled = true

    this.scheduler = new CronJob({
      cronTime: '0 11 * * 4',
      timezone: 'Europe/London',
      context: this,
      onTick: this.startOrder,
      start: true
    })
  }

  stopBot() {
    this.scheduler.stop()

    this.props.optionsStore.isBotEnabled = false
  }

  async startOrder() {
    if (!this.props.optionsStore.isBotEnabled)
      new Notification('🛒 Cop Bot is running, good luck!')

    await this.props.ordersStore.orders.map(async order => {
      order.state = 'running'

      try {
        const account = this.props.accountsStore.getById(order.accountId)

        const options = {
          delay: this.props.optionsStore.delay,
          reCaptcha: this.props.optionsStore.reCaptcha
        }

        const response = await supremeBot(order, account, options)

        order.state = response ? 'success' : 'failure'
      } catch (e) {
        order.state = 'failure'
      }
    })

    if (this.props.optionsStore.isBotEnabled) await this.stopBot()
  }

  updateBot() {
    this.props.optionsStore.isBotEnabled = !this.props.optionsStore.isBotEnabled
    this.props.optionsStore.isBotEnabled ? this.startBot() : this.stopBot()
  }

  render() {
    const { isBotEnabled } = this.props.optionsStore

    return (
      <Container>
        <Toggle
          onClick={this.updateBot}
          textOn="Bot will automatically run at 11:00"
          textOff="Bot is off"
          state={isBotEnabled}
          nav
        />

        <StartBot onClick={this.startOrder}>Start Bot</StartBot>
      </Container>
    )
  }
}

export default Bot
