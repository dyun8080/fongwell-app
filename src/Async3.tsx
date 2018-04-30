import React, { Component } from 'react'
import moment from 'moment'

export default class extends Component {
	render() {
		return (
			<div>
				Async3:
				{moment().format('YYYY-MM-DD')}
			</div>
		)
	}
}
