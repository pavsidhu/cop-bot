import { observable } from 'mobx'

class OptionsStore {
  @observable showChrome = true
  @observable isBotEnabled = false
}

export default new OptionsStore()
