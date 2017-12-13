import { observable, computed } from 'mobx'

export default class Order {
  @observable id = null
  @observable keywords = []
  @observable color = null
  @observable size = null
  @observable category = null
  @observable accountId = null
  @observable state = null

  constructor(details) {
    this.id = details.id
    this.keywords = details.keywords.split(', ')
    this.color = details.color
    this.size = details.size
    this.category = details.category
    this.accountId = details.accountId
    this.state = 'waiting'
  }
}
