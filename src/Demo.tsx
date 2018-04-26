import React, { Component } from 'react'
import styles from './Demo.less'
import { Tag, Button } from 'antd'
import { observer, inject } from 'mobx-react'

// import foods from './stores/foods'

@inject('foods')
@observer
export default class Demo extends Component<any, any> {
	state = {
		number: 0,
	}

	update = () => {
		this.setState({
			number: this.state.number + 1,
		})
	}


	render() {
		const { foods } = this.props

		return (
			<div className="mt10">
				<div className={styles.hehe}>
					halo~{foods.count3}
				</div>
				<Button onClick={() => this.update()}>阿萨德{this.state.number}</Button>
				<Button onClick={() => foods.add('count')}>add1</Button>
				<Button onClick={() => foods.add('count2')}>add2</Button>
				{foods.data.map((item: any) => <Tag key={Math.random()}>{item.name}: {item.age}</Tag>)}
			</div>
		)
	}
}
