function incrementFactory() {

    let num = 0;

    function increment() {
        num = num + 1;
        console.log(num);    
    }

    return increment;
}

const increment = incrementFactory();


increment();
increment();
increment();

const d = 1;
d += 10;
console.log(d);