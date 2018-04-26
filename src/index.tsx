import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { Provider } from 'mobx-react'

import asyncComponent from './hoc/asyncComponent'
import stores from './stores'

import '../assets/styles/layout.less'
import '../assets/styles/classes.less'

const Demo = asyncComponent(() => import('./Demo'))
const Wrap = withRouter(props => <Demo {...props} />)

// webpack4 不在需要插件在浏览器注入环境变量了
// console.log(process.env.NODE_ENV)


ReactDOM.render(
	<LocaleProvider locale={zhCN} >
		<Provider {...stores}>
			<Router>
				<Wrap />
			</Router>
		</Provider>
	</LocaleProvider>,
	document.getElementById('root') as HTMLElement,
)
