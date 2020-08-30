let a = 0;

function fn1(arg1) {
    arg1 = 1;
    console.log(a, arg1);
}

fn1(a); // 0, 1

let b = {
    prop: 0
};

function fn2(arg2) {
    arg2.prop = 1;
    console.log(b, arg2);
}

fn2(b); //prop: 1, prop: 1

function fn3(arg2) {
    arg2 = {};
    console.log(b, arg2);
}

fn3(b);// prop: 1, {}
