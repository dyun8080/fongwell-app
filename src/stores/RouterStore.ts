import { History } from 'history'
import { computed } from 'mobx'
import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { RouteComponentProps } from 'react-router-dom'

import asyncComponent from '../hoc/asyncComponent'

const AsyncView1 = asyncComponent(() => import('../views/AsyncView1'))
const AsyncView2 = asyncComponent(() => import('../views/AsyncView2'))

export interface AsyncViewProps extends RouteComponentProps<any>, RouteItemValues { }

export interface RouteItemValues {
	hide?: boolean
	title: string
	url: string
	Component: React.ComponentType<AsyncViewProps>
}

export class RouterStore extends BaseRouterStore {
	static RouteList: Array<RouteItemValues> = [
		{ title: '货品管理', url: '/production', Component: AsyncView1 },
		{ title: '店铺管理', url: '/store', Component: AsyncView2 },
		{ hide: true, title: '货品详情', url: '/production/:id', Component: AsyncView2 },

	]

	constructor(history?: History) {
		super()
		if (history) {
			this.history = syncHistoryWithStore(history, this)
		}
	}

	@computed get menuList() {
		return this.location && this.location.pathname
	}


}

export default RouterStore
