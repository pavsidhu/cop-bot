import { observable } from 'mobx'
import { persist } from 'mobx-persist'
import Account from '../models/Account'

class AccountsStore {
  @persist('list')
  @observable
  accounts = []

  @persist
  @observable
  nextId = 0

  add(details) {
    this.accounts.push(
      new Account({
        id: this.nextId,
        ...details,
      }),
    )

    this.nextId += 1
  }

  update(id, details) {
    this.accounts[id] = { ...this.accounts[id], details }
  }

  remove(id) {
    this.accounts = this.accounts.filter(account => account.id !== id)
  }

  isEmpty() {
    return this.accounts.length === 0
  }
}

export default new AccountsStore()
