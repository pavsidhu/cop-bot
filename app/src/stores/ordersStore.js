import { observable } from 'mobx'
import { persist } from 'mobx-persist'
import Order from '../models/Order'

class OrdersStore {
  @persist('list')
  @observable
  orders = []

  add(details) {
    this.orders.push(
      new Order({
        id: this.orders.length,
        ...details,
      }),
    )
  }

  update(id, details) {
    this.orders[id] = { ...this.orders[id], details }
  }

  remove(id) {
    this.orders = this.orders.filter(order => order.id !== id)
  }
}

export default new OrdersStore()
