import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import asyncComponent from './hoc/asyncComponent'

import { Provider } from 'mobx-react'
import stores from './stores'

const Demo = asyncComponent(() => import('./Demo'))
const Demo2 = asyncComponent(() => import('./Demo2'))

// webpack4 不在需要插件在浏览器注入环境变量了
// console.log(process.env.NODE_ENV)

import '../assets/styles/layout.less'
import '../assets/styles/classes.less'

// const DemoR = withRouter(props => <Demo {...props} />)

ReactDOM.render(
	<Provider {...stores}>
		<div>
			<Demo />
			<Demo2 />
		</div>
	</Provider>,
	document.getElementById('root') as HTMLElement,
)
