import  defaultVal, { publicVal as val, publicFn as fn } from './moduleA.js';
console.log(val);
console.log(defaultVal);
fn();


/*
import  defaultVal, * as moduleA from './moduleA.js';
console.log(moduleA.default);
*/