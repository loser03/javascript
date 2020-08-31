window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name); //this is person because of method
        a(); //this is window because of function

        const person = {
            name: 'Tim',
            hello: function() {
                console.log('Hello ' + this.name); // this is person because of method
                a(); // this is window because of function
            }
        }
        person.hello();
    }
}

// const ref = person.hello;
// ref();

person.hello();

function a() {
    console.log('Hello ' + this.name);
}