// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { inject, observer } from 'mobx-react'
import { CronJob } from 'cron'

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

const ToggleContainer = styled.div`
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
    props.on
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
    const _ = new Notification('🛒 Cop Bot is running', {
      body: 'Good luck for this drop'
    })

    await this.props.ordersStore.orders.map(async order => {
      order.state = 'running'

      try {
        const account = this.props.accountsStore.getById(order.accountId)

        const response = await supremeBot(order, account)

        order.state = response ? 'success' : 'failure'
      } catch (e) {
        order.state = 'failure'
      }
    })

    await this.stopBot()
  }

  updateBot() {
    this.props.optionsStore.isBotEnabled = !this.props.optionsStore.isBotEnabled
    this.props.optionsStore.isBotEnabled ? this.startBot() : this.stopBot()
  }

  render() {
    const { isBotEnabled } = this.props.optionsStore

    return (
      <Container>
        <ToggleContainer onClick={this.updateBot}>
          <Text>
            {isBotEnabled
              ? 'Bot will automatically run at 11:00'
              : 'Bot is off'}{' '}
          </Text>
          <Toggle on={isBotEnabled} />
          <Track />
        </ToggleContainer>

        <StartBot onClick={this.startOrder}>Start Bot</StartBot>
      </Container>
    )
  }
}

export default Bot
