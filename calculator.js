class Calculator {
	constructor() {
		this.num = null;
		this._operator;
	}
	
	set(num) {
		if(this.num === null) {
			this.num = num;
		} else {
			this._operator(this.num, num);
		}
		return this;
	}

	plus() {
		this._operator = function(num1, num2) {
			const result = num1 + num2;
			this._equal(result);
		}
		return this;
	}

	minus() {
		this._operator = function(num1, num2) {
			const result = num1 - num2;
			this._equal(result);
		}
		return this;
	}
	
	multiply() {
		this._operator = function(num1, num2) {
			const result = num1 * num2;
			this._equal(result);
		}
		return this;
	}
	
	divide() {
		this._operator = function(num1, num2) {
			const result = num1 / num2;
			this._equal(result);
		}
		return this;
	}

	_equal(result) {
		this.num = result;
		console.log(result);
	}
}

const calc = new Calculator();

calc.set(10)
	.plus()
	.set(3)
	.multiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
