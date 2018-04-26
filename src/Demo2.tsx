import React, { Component } from 'react'
import styles from './Demo.less'
import { Tag, Button } from 'antd'
import { observer } from 'mobx-react'

import foods from './stores/foods'

@observer
export default class Demo2 extends Component<any, any> {
	render() {
		return (
			<div className="mt10">
				<div className={styles.hehe}>
					halo~~~~~~~~~~~~~
				</div>
				<Button onClick={foods.pushData}>add</Button>
				{foods.data.map(item => <Tag key={Math.random()}>{item.name}: {item.age}22</Tag>)}
			</div>
		)
	}
}
