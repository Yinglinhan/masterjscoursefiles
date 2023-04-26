
const obj = {
	a: 1,
	ccc: '5555',
	_name: 'hello',
	get name() {
		return this._name

	},
	set name(value) {
		if (typeof value === 'string') {
			this._name = value
		} else {
			throw new Error('需要字符串')
		}

	}
}


// Object.defineProperty(obj, 'hellocode', {
// 	set (value) {

// 	},
// 	get (){
// 		return 'hello code'
// 	}
// })

Object.defineProperties(obj, {
	'_code': {
		value: 100,
		enumerable: false
	},
	'code': {
		get() {
			return this._code
		},
		set(value) {
			this._code = value
		}

	}
})


// console.log(Object.keys(obj))

// for (let i in obj) {
// 	console.log(i)
// }

// obj.b = 9999
// console.log(obj)

// obj.name = 11
// console.log(obj.name)

class X {
	constructor(name) {
		this.name = name
	}

	_name = 1

	get name() {

	}

	set name(value) {
		this._name = value
	}

	static get abc() {
		return 'hello'
	}
}

console.log(X.abc)

