import React, { Component } from 'react'
import { Button, Tag } from 'antd'
import { observer, inject } from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'

import { Foods } from './stores'

interface StoresProps {
	foods?: any
}

interface Props extends RouteComponentProps<any>, StoresProps {

}

@inject('foods')
@observer
class ComponentName extends Component<StoresProps, any> {
	store: Foods = this.props.foods

	render() {
		return (
			<div>
				123
			</div>
		)
	}
}



@inject('foods')
@observer
export default class Demo extends Component<Props, any> {
	store: Foods = this.props.foods

	render() {
		const { store } = this
		return (
			<div className="mt10">
				<div>
					halo~{store.allCount}
				</div>
				<ComponentName />
				<Button onClick={() => store.add('count')}>add1</Button>
				<Button onClick={() => store.add('count2')}>add2</Button>
				<Button onClick={() => store.pushData()}>add2</Button>
				{store.data.map((item: any) => <Tag key={Math.random()}>{item.name}: {item.age}</Tag>)}
			</div>
		)
	}
}
