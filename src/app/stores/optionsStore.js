import { observable } from 'mobx'
import { persist } from 'mobx-persist'

class OptionsStore {
  @persist
  @observable
  isBotEnabled = false
}

export default new OptionsStore()
