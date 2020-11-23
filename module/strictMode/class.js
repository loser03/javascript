function fn() {
    console.log(this); //window obj
}
fn();

class C {
    constructor() {
        function fn() {
            console.log(this); //undefined due to auto strict mode
        }
        fn();
    }
    method() {
        function fn() {
            console.log(this); //undefined due to auto strict mode
        }
        fn();
    }
}

const c = new C();
c.method();
