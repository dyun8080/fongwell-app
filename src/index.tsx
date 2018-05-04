import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { createHashHistory } from 'history'

import { createStores } from './stores'
import Layout from './Layout'
import '../assets/styles/layout.less'
import '../assets/styles/classes.less'


const RouterContainer = withRouter(props => <Layout {...props} />)

const history = createHashHistory()

const rootStore = createStores(history)

ReactDOM.render(
	<LocaleProvider locale={zhCN}>
		<Provider {...rootStore}>
			<Router>
				<RouterContainer />
			</Router>
		</Provider>
	</LocaleProvider>,
	document.getElementById('root') as HTMLElement,
)
