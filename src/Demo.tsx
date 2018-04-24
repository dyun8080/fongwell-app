import React, { Component } from 'react'
import styles from './Demo.less'
import asyncComponent from './hoc/asyncComponent'
import { Tag } from 'antd'

const Async3 = asyncComponent(() => import('./Async3'))
const Async = asyncComponent(() => import('./Async'))

export default class Demo extends Component {
	render() {
		return (
			<div className="mt10">
				<div className={styles.hehe}>
					halo~
				</div>
				<Tag>tag</Tag>
				<Async3 />
				<Async />
			</div>
		)
	}
}
