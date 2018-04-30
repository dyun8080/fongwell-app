import './mobxConfig'
import { History } from 'history'
import { RouterStore } from './RouterStore'
import { TodoStore } from './TodoStore'
import { TodoModel } from '../models'

import {
	STORE_TODO,
	STORE_ROUTER,
} from '../constants'

export function createStores(history: History, defaultTodos: TodoModel[]) {
	const todoStore = new TodoStore(defaultTodos)
	const routerStore = new RouterStore(history)
	return {
		[STORE_TODO]: todoStore,
		[STORE_ROUTER]: routerStore,
	}
}
