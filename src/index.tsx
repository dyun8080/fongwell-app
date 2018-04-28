import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { createBrowserHistory } from 'history'
import asyncComponent from './hoc/asyncComponent'
import { createStores } from './stores'

import '../assets/styles/layout.less'
import '../assets/styles/classes.less'

// webpack4 不在需要插件在浏览器注入环境变量了
// console.log(process.env.NODE_ENV)

const Demo = asyncComponent(() => import('./Demo'))
const Wrap = withRouter(props => <Demo {...props} />)


// prepare MobX stores
const history = createBrowserHistory()
const rootStore = createStores(history)



ReactDOM.render(
	<LocaleProvider locale={zhCN}>
		<Provider {...rootStore}>
			<Router>
				<Wrap />
			</Router>
		</Provider>
	</LocaleProvider>,
	document.getElementById('root') as HTMLElement,
)
