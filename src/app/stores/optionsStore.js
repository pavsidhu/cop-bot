import { observable } from 'mobx'

class OptionsStore {
  @observable isBotEnabled = false
}

export default new OptionsStore()
