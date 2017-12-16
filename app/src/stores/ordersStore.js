import { observable } from 'mobx'
import { persist } from 'mobx-persist'
import Order from '../models/Order'

class OrdersStore {
  @persist('list')
  @observable
  orders = []

  @persist
  @observable
  nextId = 0

  add(details, accountId) {
    this.orders.push(
      new Order({
        id: this.nextId,
        accountId,
        ...details,
      }),
    )

    this.nextId += 1
  }

  update(id, details) {
    this.orders[id] = { ...this.orders[id], details }
  }

  remove(id) {
    this.orders = this.orders.filter(order => order.id !== id)
  }

  isEmpty() {
    return this.orders.length === 0
  }
}

export default new OrdersStore()
