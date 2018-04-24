import React, { Component } from 'react'
import { Alert, Input } from 'antd'

export default class extends Component {
	render() {
		return (
			<div>
				<Alert message="Success Text" type="success" />
				<Input />
			</div>
		)
	}
}
