'use strict'; // this mention cause a error of descriptor

// const obj = {prop: 0};

const obj = {};

Object.defineProperty(obj, 'prop', {
    configurable: true,
    value: 0,
    writable: true
})


delete obj.prop;

// obj.prop = 1;
console.log(obj.prop);  //undefined due to configurable: true

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(descriptor);



