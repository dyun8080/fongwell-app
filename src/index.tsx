import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const damao = {
	name: 'damao',
}

const xiaomao = {
	name: 'xiaomao',
}

console.log({
	...damao,
	...xiaomao,
})

const arr = [1, 23]

const target = arr.find(i => i == 1);

(async function () {
	await null
	console.log(123)
})()

console.log(target)

class Demo extends Component {
	render() {
		return (
			<div>halo~</div>
		)
	}
}

ReactDOM.render(
	<Demo />,
	document.getElementById('root') as HTMLElement,
)
