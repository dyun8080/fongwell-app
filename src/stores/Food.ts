import { observable, action, computed, IObservableArray } from 'mobx'


import Action from './Action'

interface DataValue {
	name: string
	age: number

	[key: string]: any

}


export class Food extends Action {
	static id = 0
	constructor() {
		super()
	}

	@observable data: IObservableArray<DataValue> = [] as any

	@observable count = 0
	@observable count2 = 0

	@action pushData = () => {
		this.data.push({ name: 'xiaoming', age: 100 })

	}

	@computed get allCount() {
		return this.count + this.count2
	}
}

export default Food
