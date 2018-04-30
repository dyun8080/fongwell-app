import React, { Component } from 'react'
import moment from 'moment'

export default class extends Component {
	render() {
		return (
			<div>
				Async2:
				{moment().format('YYYY-MM-DD')}
			</div>
		)
	}
}
