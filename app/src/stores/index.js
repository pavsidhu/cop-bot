import { create } from 'mobx-persist'
import accountsStore from './accountsStore'
import ordersStore from './ordersStore'

const hydrate = create({})

hydrate('accounts', accountsStore)
hydrate('orders', ordersStore)

export default { accountsStore, ordersStore }
