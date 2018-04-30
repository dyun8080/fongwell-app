import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd'

import zhCN from 'antd/lib/locale-provider/zh_CN'
import { createHashHistory } from 'history'
import { createStores } from './stores'

import View from './views'
import { TodoModel } from './models'

import '../assets/styles/layout.less'
import '../assets/styles/classes.less'

// console.log(process.env.NODE_ENV)

const User = () =>
	<div>123123</div>

const RouterContainer = withRouter(props => <View {...props} />)

const defaultTodos = [
	new TodoModel('Use Mobx', true),
	new TodoModel('Use TypeScript', true),
	new TodoModel('Use React', true),
	new TodoModel('Use Redux', false),
]

const history = createHashHistory()
const rootStore = createStores(history, defaultTodos)


ReactDOM.render(
	<LocaleProvider locale={zhCN}>
		<Provider {...rootStore}>
			<Router>
				<div>
					<RouterContainer />
					<Switch>
						<Route path="/user" component={User} />
					</Switch>
				</div>
			</Router>
		</Provider>
	</LocaleProvider>,
	document.getElementById('root') as HTMLElement,
)
