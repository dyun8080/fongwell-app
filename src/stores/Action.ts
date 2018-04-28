import { action } from 'mobx'

class Action {
	@action onChange = (key: string, value: any) => {
		if (key in this) this[key] = value
		else return new Error('key is not this property')
	}

}

export default Action
