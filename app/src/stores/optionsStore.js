import { observable } from 'mobx'

class OptionsStore {
  @observable hideChrome = false
  @observable isBotEnabled = false
}

export default new OptionsStore()
