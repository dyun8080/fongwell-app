import { observable, action, computed, IObservableArray } from 'mobx'

interface DataValue {
	name: string
	age: number
}

class Foods {
	@observable data: IObservableArray<DataValue> = observable([])

	@observable count = 0
	@observable count2 = 0

	@action add = (type: 'count' | 'count2') => {
		this[type] = this[type] + 1
	}


	@action pushData = () => {
		this.data.push({ name: 'damao', age: 24 })

		setTimeout(() => {
			this.count = this.count + 1
		}, 1000)
	}

	@computed get count3() {
		return this.count + this.count2
	}
}

const store = new Foods()

export default store
