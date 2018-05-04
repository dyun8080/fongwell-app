import './mobxConfig'
import { History } from 'history'
import { RouterStore } from './RouterStore'

import { STORE_ROUTER } from '../constants'

export function createStores(history: History) {
	const routerStore = new RouterStore(history)
	return {
		[STORE_ROUTER]: routerStore,
	}
}
