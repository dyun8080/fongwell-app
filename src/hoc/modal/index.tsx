import React from 'react'

interface Props {
	children: React.ReactElement<any>
	[key: string]: any
}

interface State {
	visible: boolean
	confirmLoading: boolean
}

export interface WrappedComponentImplements {
	onConfirmLoading: any
	handleCancel: any
	/** 函数返回promise的resolve时候，取消按钮旋转 */
	asyncConfirm: (asyncCb?: () => Promise<any>) => void
}

export interface WrappedComponentProps extends Props, State, WrappedComponentImplements { }

export default (WrappedComponent: React.ComponentType<WrappedComponentProps>): React.ComponentType<Props> => {

	return class extends React.Component<Props, State> implements WrappedComponentImplements {
		state = {
			visible: false,
			confirmLoading: false,
		}

		showModal = () => this.setState({ visible: true }, () => {
			// this.props.showbefore && this.props.showbefore()
			// this.refs.WrappedComponent.showAfter && this.refs.WrappedComponent.showAfter()
		})

		onConfirmLoading = (isSwitch: boolean) => this.setState({ confirmLoading: isSwitch })

		handleCancel = (cb?: Function) => {
			this.setState({
				visible: false,
				confirmLoading: false,
			}, cb && cb())
		}

		asyncConfirm = async (asyncCb?: () => Promise<any>) => {
			if (!asyncCb) {
				this.handleCancel()
				return
			}
			this.setState({ confirmLoading: true }, async () => {
				await asyncCb()
				this.handleCancel()
			})
		}


		render() {
			return (
				[
					React.cloneElement(this.props.children, { onClick: this.showModal, key: 'outer' }),
					<WrappedComponent
						ref="WrappedComponent"
						key="WrappedComponent"
						onConfirmLoading={this.onConfirmLoading}
						handleCancel={this.handleCancel}
						asyncConfirm={this.asyncConfirm}
						{...this.state}
						{...this.props}
					/>,
				]
			)
		}
	}
}
