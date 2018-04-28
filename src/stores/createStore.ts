import './mobxConfig'
import { History } from 'history'
import { Food } from './Food'
import { RouterStore } from './RouterStore'
import {
	STORE_FOOD,
	STORE_ROUTER,
} from '../constants'

export function createStores(history: History) {

	const FoodStore = new Food()
	const routerStore = new RouterStore(history)

	return {
		[STORE_FOOD]: FoodStore,
		[STORE_ROUTER]: routerStore,
	}
}
