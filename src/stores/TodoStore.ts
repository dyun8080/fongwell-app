import { observable, computed, action } from 'mobx'
import { TodoModel } from '../models'

export class TodoStore {
	constructor(fixtures: Array<TodoModel>) {
		this.todos = fixtures
	}

	@observable public todos: Array<TodoModel>

	@computed
	get activeTodos() {
		return this.todos.filter((todo) => !todo.completed)
	}

	@computed
	get completedTodos() {
		return this.todos.filter((todo) => todo.completed)
	}

	@action
	addTodo = (item: Partial<TodoModel>): void => {
		this.todos.push(new TodoModel(item.text, item.completed))
	}

	@action
	deleteTodo = (id: number): void => {
		this.todos = this.todos.filter((todo) => todo.id !== id)
	}

	@action
	completeAll = (): void => {
		this.todos = this.todos.map((todo) => ({ ...todo, completed: true }))
	}

	@action
	clearCompleted = (): void => {
		this.todos = this.todos.filter((todo) => !todo.completed)

	}
}

export default TodoStore
