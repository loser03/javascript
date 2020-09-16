// function* gen() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// const it = gen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function genIterator(max = 10) {
//     let i = 0;

//     return {
//         next: function() {
//             if(i >= max) {
//                 done: true
//             } else {
//                 return {
//                     done: false,
//                     value: i++
//                 }
//             }
//         }
//     }
// }

// function* genIterator(max = 10) {
//     let i = 0;

//     while(i < max) {
//         yield i++;
//     }
//     return;
// }

const it = genIterator(10);

let a = it.next();
while(!a.done) {
    console.log(a.value);
    a = it.next();
}

const obj = {
    *[Symbol.iterator](max = 10) { // = [Symbol.iterator]: function* genIterator(max = 10) {
        let i = 0;
    
        while(i < max) {
            yield i++;
        }
        return;
    }
}

for(const i of genIterator()) {
    console.log(i);
}