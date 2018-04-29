import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { observable } from 'mobx'
import { Provider } from 'mobx-react'
import { LocaleProvider, Button } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { createBrowserHistory } from 'history'
import asyncComponent from './hoc/asyncComponent'
import { createStores } from './stores'

import '../assets/styles/layout.less'
import '../assets/styles/classes.less'

// console.log(process.env.NODE_ENV)

const Demo = asyncComponent(() => import('./Demo'))
const Demo2 = asyncComponent(() => import('./Demo2'))

const Wrap = withRouter(props => <Demo {...props} />)

console.log(observable)


// prepare MobX stores
const history = createBrowserHistory()
const rootStore = createStores(history)


ReactDOM.render(
	<LocaleProvider locale={zhCN}>
		<Provider {...rootStore}>
			<Router>
				<div>
					<Button>阿萨德</Button>
					<Demo2 />
					<Wrap />
				</div>
			</Router>
		</Provider>
	</LocaleProvider>,
	document.getElementById('root') as HTMLElement,
)
