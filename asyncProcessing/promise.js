new Promise(function(resolve, reject) {
    console.log('promise');
    // reject('bye');
    setTimeout(function() {
        resolve('hello');
    }, 1000)
}).then(function(data) {
    console.log('then:' + data);
    // throw new Error(); // move to catch method
    return data; // 
}).then(function(data) {
    console.log('then:' + data);
    return data;
}).catch(function(data) {
    console.log('catch:' + data);
}).finally(function(data) { // finally method can't get any arguments 
    console.log('finally:' + data); // finally:undefined
})

console.log('global end');