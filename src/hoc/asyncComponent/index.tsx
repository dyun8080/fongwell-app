import React from 'react'

export default (importComponent: any): React.ComponentType<any> => {
	return class extends React.Component {
		state = {
			component: null,
		}
		async componentDidMount() {
			const { default: component } = await importComponent()
			this.setState({ component })
		}
		render() {
			const Component = this.state.component as any
			return Component
				? <Component {...this.props} />
				: null
		}
	}
}
