import { observable } from 'mobx'

export default class Account {
  @observable id = null
  @observable name = null
  @observable email = null
  @observable phone = null
  @observable addressOne = null
  @observable addressTwo = null
  @observable addressThree = null
  @observable city = null
  @observable postCode = null
  @observable country = null
  @observable cardType = null
  @observable cardNumber = null
  @observable cardExpiryMonth = null
  @observable cardExpiryYear = null
  @observable cardCvv = null

  constructor(details) {
    this.id = details.id
    this.name = details.name
    this.email = details.email
    this.phone = details.phone
    this.addressOne = details.addressOne
    this.addressTwo = details.addressTwo
    this.addressThree = details.addressThree
    this.city = details.city
    this.postCode = details.postCode
    this.country = details.country
    this.cardType = details.cardType
    this.cardNumber = details.cardNumber
    this.cardExpiryMonth = details.cardExpiryMonth
    this.cardExpiryYear = details.cardExpiryYear
    this.cardCvv = details.cardCvv
  }
}
