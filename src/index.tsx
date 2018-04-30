import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import asyncComponent from './hoc/asyncComponent'
import { Button, Modal } from 'antd'
import modal, { WrappedComponentProps } from './hoc/modal'


const Async1 = asyncComponent(() => import('./Async1'))
const Async2 = asyncComponent(() => import('./Async2'))
const Async3 = asyncComponent(() => import('./Async3'))

@modal
class Async1Modal extends React.Component<WrappedComponentProps, any> {
	render() {
		return (
			<Modal
				visible={this.props.visible}
				onCancel={() => this.props.handleCancel()}
			>
				<Async1 />
			</Modal>
		)
	}
}

@modal
class Async2Modal extends React.Component<WrappedComponentProps, any> {
	render() {
		return (
			<Modal
				visible={this.props.visible}
				onCancel={() => this.props.handleCancel()}
			>
				<Async2 />
			</Modal>
		)
	}
}

@modal
class Async3Modal extends React.Component<WrappedComponentProps, any> {
	render() {
		return (
			<Modal
				visible={this.props.visible}
				onCancel={() => this.props.handleCancel()}
			>
				<Async3 />
			</Modal>
		)
	}
}

ReactDOM.render(
	<div>
		<Async1Modal><Button>Async1</Button></Async1Modal>
		<Async2Modal><Button>Async1</Button></Async2Modal>
		<Async3Modal><Button>Async3Modal</Button></Async3Modal>
	</div>,
	document.getElementById('root') as HTMLElement,
)
