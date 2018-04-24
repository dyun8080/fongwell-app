import React, { Component } from 'react'
import { Button, Modal } from 'antd'

import modal, { WrappedComponentProps } from './hoc/modal'
import moment from 'moment'

@modal
class Add extends Component<WrappedComponentProps, any> {
	onOk = () => {
		this.props.onConfirmLoading(true)

		setTimeout(() => {
			this.props.onConfirmLoading(false)
			this.props.handleCancel()
		}, 2000)
	}


	render() {
		return (
			<Modal
				visible={this.props.visible}
				onCancel={() => this.props.handleCancel()}
				onOk={this.onOk}
				confirmLoading={this.props.confirmLoading}
			>
				<div>
					<p>some content..</p>
					<p>some content..</p>
					<p>some content..</p>
					<p>{moment().format('YYYY-MM-DD')}</p>
				</div>
			</Modal>
		)
	}
}
// const ADDD = modal(Add)

export default class Demo extends Component {
	render() {
		return (
			<Add>
				<Button type="primary">Async</Button>
			</Add>
		)
	}
}
