import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Button, Badge } from 'antd'

import { TodoStore, RouterStore } from '../stores'
import { STORE_ROUTER, STORE_TODO } from '../constants'


@inject(STORE_ROUTER, STORE_TODO)
@observer
class TodoList extends Component {
	routerStore = this.props[STORE_ROUTER] as RouterStore
	todoStore = this.props[STORE_TODO] as TodoStore

	render() {
		const { todoStore } = this

		return (
			<div style={{ margin: 20 }}>
				<Button onClick={() => todoStore.completeAll()}>completeAll</Button>

				<Button onClick={() => todoStore.deleteTodoAll()}>deleteTodoAll</Button>

				<Button onClick={() => todoStore.clearCompleted()}>clearCompleted</Button>

				{todoStore.todos.map(item => (
					<div key={item.id}>
						{item.text} <Badge status={item.completed ? 'success' : 'default'} />
					</div>
				))}
			</div>
		)
	}
}

export default class extends Component<RouteComponentProps<any>, any> {
	render() {
		return <TodoList />
	}
}
