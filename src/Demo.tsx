import React, { Component } from 'react'
import { Button, Tag } from 'antd'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

import { Food } from './stores'

import { STORE_FOOD } from './constants'

import Button1 from '@components/Button'

class Element extends Component {
	render() {
		return (
			<div>
				elemesds
			</div>
		)
	}
}

@inject(STORE_FOOD)
@observer
export default class Demo extends Component<any, any> {
	foodStore = this.props[STORE_FOOD] as Food

	render() {
		const { foodStore } = this
		console.log(observable)

		return (
			<div className="mt10">
				<div>
					<Button1 />
					halo~{foodStore.allCount}
				</div>
				<Button onClick={() => foodStore.onChange('count', foodStore.count + 1)}>add1213111</Button>
				<Button onClick={() => foodStore.onChange('count2', foodStore.count2 + 1)}>add1</Button>
				<Button onClick={() => foodStore.pushData()}>add2</Button>
				<Element />
				{foodStore.data.map((item: any) => <Tag key={Math.random()}>{item.name}: {item.age}</Tag>)}
			</div>
		)
	}
}
