// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { inject, observer } from 'mobx-react'
import { CronJob } from 'cron'

import Button from './Button'
import supremeBot from '../bots/supreme'

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
    this.setState(() => ({ isBotEnabled: true }))

    this.scheduler = new CronJob({
      cronTime: '* 11 * * 4',
      timezone: 'Europe/London',
      context: this,
      onTick: this.startOrder,
    })
  }

  stopBot() {
    this.scheduler.stop()

    this.setState(() => ({ isBotEnabled: false }))
  }

  async startOrder() {
    const _ = new Notification('🛒 Cop Bot is running', {
      body: 'Good luck for this drop',
    })

    await this.props.ordersStore.orders.map(async order => {
      order.state = 'running'

      try {
        const account = this.props.accountsStore.getById(order.accountId)

        order.state = (await supremeBot(order, account)) ? 'success' : 'failure'
      } catch (e) {
        order.state = 'failure'
      }
    })

    await this.stopBot()
  }

  updateBot() {
    this.setState(state => ({ isBotEnabled: !state.isBotEnabled }))
    this.state.isBotEnabled ? this.stopBot() : this.startBot()
  }

  render() {
    return (
      <Container onClick={this.updateBot}>
        <Text>{this.state.isBotEnabled ? 'Bot is On' : 'Bot is Off'} </Text>
        <Toggle isBotEnabled={this.state.isBotEnabled} />
        <Track />
      </Container>
    )
  }
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 16px 24px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: white;
  margin-right: 16px;
  transform: translateX(24px);
`

const Toggle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 48px;
  animation: transform 1s forwards;

  ${props =>
    props.isBotEnabled
      ? css`
          transform: translateX(32px);
          background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        `
      : css`
          transform: translateX(20px);
          background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
        `};
`
const Track = styled.div`
  width: 32px;
  height: 8px;
  background-color: white;
  border-radius: 4px;
`

export default Bot
