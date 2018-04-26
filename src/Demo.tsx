import React, { Component } from 'react'
// import styles from './Demo.less'
import { Button, Tag } from 'antd'
import { observer, inject } from 'mobx-react'

// import foods from './stores/foods'

import { Foods } from './stores/foods'

@inject('foods')
@observer
export default class Demo extends Component<any, any> {
	store: Foods = this.props.foods

	render() {
		const { store } = this

		return (
			<div className="mt10">
				<div>
					halo~{store.count3}
				</div>
				<Button onClick={() => store.add('count')}>add1</Button>
				<Button onClick={() => store.add('count2')}>add2</Button>
				<Button onClick={() => store.pushData()}>add2</Button>
				{store.data.map((item: any) => <Tag key={Math.random()}>{item.name}: {item.age}</Tag>)}
			</div>
		)
	}
}
