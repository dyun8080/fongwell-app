import './mobxConfig'
import { History } from 'history'
import { Food } from './Food'
import { RouterStore } from './RouterStore'
import {
	STORE_FOOD,
	STORE_ROUTER,
} from '../constants'

export function createStores(history: History) {
	return {
		[STORE_FOOD]: new Food(),
		[STORE_ROUTER]: new RouterStore(history),
	}
}
