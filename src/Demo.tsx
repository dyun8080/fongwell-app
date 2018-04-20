import React, { Component } from 'react'
import styles from './Demo.less'
import asyncComponent from './hoc/asyncComponent'

// import Async from './Async'

const Async = asyncComponent(() => import('./Async'))

export default class Demo extends Component {
	render() {
		return (
			<div className="mt10">
				<div className={styles.hehe}>
					halo~
				</div>
				<Async />
			</div>
		)
	}
}
