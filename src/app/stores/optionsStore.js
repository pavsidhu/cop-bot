import { observable } from 'mobx'
import { persist } from 'mobx-persist'

class OptionsStore {
  @persist
  @observable
  isBotEnabled = false

  @persist
  @observable
  delay = null

  @persist
  @observable
  reCaptcha = true
}

export default new OptionsStore()
