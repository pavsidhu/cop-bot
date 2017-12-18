import { observable } from 'mobx'
import { persist } from 'mobx-persist'

class OptionsStore {
  @persist
  @observable
  hideChrome = true

  @persist
  @observable
  isBotEnabled = true
}

export default new OptionsStore()
