const events = (function() {
	 const eventStack = new Map();

	 return {
		 on(type, fn) {
			 const fnStack = eventStack.get(type) || new Set();
			 fnStack.add(fn);
			 eventStack.set(type, fnStack);
		 },
		 off(type, fn) {
			 const fnStack = eventStack.get(type);
			 if(fnStack && fnStack.has(fn)) {
				 fnStack.delete(fn)
			 }
		 },
		 emit(type, _this) {
			 const fnStack = eventStack.get(type);
			 if(fnStack) {
				 for(const fn of fnStack) {
					 fn.call(_this);
				 }
			 }
		 }
	 }
 })();

class MyLibrary {
	constructor() {
		events.emit('beforeInit', this);
	
		console.log('library process');
		
		events.emit('afterInit');
	}
	method() {
		// do something
	}
}
