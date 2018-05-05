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
}

export interface WrappedComponentProps extends Props, State, WrappedComponentImplements { }

export default function (WrappedComponent: React.ComponentType<WrappedComponentProps>): React.ComponentType<Props> {
	return class extends React.Component<Props, State> implements WrappedComponentImplements {
		state = {
			visible: false,
			confirmLoading: false,
		}

		showModal = () => this.setState({ visible: true }, () => {
			// this.props.showbefore && this.props.showbefore()
			// this.refs.WrappedComponent.showAfter && this.refs.WrappedComponent.showAfter()
		})

		// componentWillReceiveProps(nextProps) {
		// 	const { visible } = nextProps;
		// 	this.setState({ visible });
		// }
		//

		onConfirmLoading = (isSwitch: boolean) => this.setState({ confirmLoading: isSwitch })

		handleCancel = (cb?: Function) => {
			this.setState({
				visible: false,
				confirmLoading: false,
			}, cb && cb())
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
						{...this.state}
						{...this.props}
					/>,
				]
			)
		}
	}
}
