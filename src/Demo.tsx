import React, { Component } from 'react'
import { Button, Tag } from 'antd'
import { observer, inject } from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'

import { Food, RouterStore } from './stores'

import { STORE_FOOD, STORE_ROUTER } from './constants'

// interface StoresProps {
// 	food?: any
// }

@inject(STORE_FOOD, STORE_ROUTER)
@observer
export default class Demo extends Component<RouteComponentProps<any>, any> {
	foodStore = this.props[STORE_FOOD] as Food
	routerStore = this.props[STORE_ROUTER] as RouterStore

	render() {
		const { foodStore, routerStore } = this

		console.log(routerStore)

		return (
			<div className="mt10">
				<div>
					halo~{foodStore.allCount}
				</div>
				<Button onClick={() => foodStore.onChange('count', foodStore.count + 1)}>add1</Button>
				<Button onClick={() => foodStore.onChange('count2', foodStore.count2 + 1)}>add2</Button>
				<Button onClick={() => foodStore.pushData()}>add2</Button>

				<Button onClick={() => { routerStore.history }}></Button>

				{foodStore.data.map((item: any) => <Tag key={Math.random()}>{item.name}: {item.age}</Tag>)}
			</div>
		)
	}
}
