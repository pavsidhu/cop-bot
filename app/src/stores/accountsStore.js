import { observable } from 'mobx'
import { persist } from 'mobx-persist'
import Account from '../models/Account'

class AccountsStore {
  @persist('list')
  @observable
  accounts = []

  add(details) {
    this.accounts.push(
      new Account({
        id: this.accounts.length,
        ...details,
      }),
    )
  }

  update(id, details) {
    this.accounts[id] = { ...this.accounts[id], details }
  }

  remove(id) {
    this.accounts = this.accounts.filter(account => account.id !== id)
  }
}

export default new AccountsStore()
