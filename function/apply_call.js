function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'Tim'};

const b = a.bind(tim);

b();

a.apply(tim, ['Tim', 'Bob']); // call is to excute a function, the first argument is this, the second and the subsequent ones are array for arguments
a.call(tim, 'Tim', 'Bob'); // call is to excute a function, the first argument is this, the second and the subsequent ones are each variable for arguments

const arry = [1, 2, 3, 4, 5];

const result = Math.max.apply(null, arry);
// const result = Math.max(...arry);

console.log(result);

