import { observable, action, computed, IObservableArray } from 'mobx'

interface DataValue {
	name: string
	age: number
}

export class Foods {
	@observable data: IObservableArray<DataValue> = observable([])

	@observable count = 0
	@observable count2 = 0

	@action add = (type: 'count' | 'count2') => {
		this[type] = this[type] + 1
	}

	@action pushData = () => {
		this.data.push({ name: 'xiaoming', age: 100 })

		setTimeout(() => {
			this.count = this.count + 1
		}, 1000)
	}

	@computed get allCount() {
		return this.count + this.count2
	}
}

const store = new Foods()

export default store
