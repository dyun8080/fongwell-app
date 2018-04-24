import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import modal, { WrappedComponentProps } from './hoc/modal'
import asyncComponent from './hoc/asyncComponent'

const Async2 = asyncComponent(() => import('./Async2'))

@modal
class Mo extends Component<WrappedComponentProps, any> {
	render() {

		return (
			<Modal
				visible={this.props.visible}
				onCancel={() => this.props.handleCancel()}
				onOk={() => this.props.handleCancel()}
			>
				<Async2 />
			</Modal>
		)
	}
}


export default class extends Component {
	render() {
		return (
			<Mo>
				<Button>按钮</Button>
			</Mo>
		)
	}
}
