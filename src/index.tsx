import React from 'react'
import ReactDOM from 'react-dom'

import Demo from './Demo'

// webpack4 不在需要插件在浏览器注入环境变量了
// console.log(process.env.NODE_ENV)

import '../assets/styles/layout.less'
import '../assets/styles/classes.less'

ReactDOM.render(
	<Demo />,
	document.getElementById('root') as HTMLElement,
)
