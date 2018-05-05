import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Button, Badge, Modal } from 'antd'

import { TodoStore, RouterStore } from '../stores'
import { STORE_ROUTER, STORE_TODO } from '../constants'


import modal, { WrappedComponentProps } from '../hoc/modal'

class HOCmodal extends Component<WrappedComponentProps, any> {
	render() {

		return (
			<Modal
				visible={this.props.visible}
				onCancel={() => this.props.handleCancel()}
				onOk={() => this.props.handleCancel()}
			>
				这是一段问题
			</Modal>
		)
	}
}

const HOCmodal_ = modal(HOCmodal)


@inject(STORE_ROUTER, STORE_TODO)
@observer
export default class TodoList extends Component<RouteComponentProps<any>, any> {
	routerStore = this.props[STORE_ROUTER] as RouterStore
	todoStore = this.props[STORE_TODO] as TodoStore

	render() {
		const { todoStore } = this

		return (
			<div style={{ margin: 20 }}>
				<Button onClick={() => todoStore.completeAll()}>completeAll</Button>

				<Button onClick={() => todoStore.deleteTodoAll()}>deleteTodoAll</Button>

				<Button onClick={() => todoStore.clearCompleted()}>clearCompleted</Button>

				<HOCmodal_ >
					<Button>HOCmodal_</Button>
				</HOCmodal_>

				{todoStore.todos.map(item => (
					<div key={item.id}>
						{item.text} <Badge status={item.completed ? 'success' : 'default'} />
					</div>
				))}
			</div>
		)
	}
}
