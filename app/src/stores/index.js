import { create } from 'mobx-persist'
import accountsStore from './accountsStore'
import ordersStore from './ordersStore'
import optionsStore from './optionsStore'

const hydrate = create({})

hydrate('accounts', accountsStore)
hydrate('orders', ordersStore)
hydrate('options', optionsStore)

export default { accountsStore, ordersStore, optionsStore }
