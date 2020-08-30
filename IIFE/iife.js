let c = (function(d) {
    
    console.log('called');
    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn is called');
    }
    function publicFn() {
        console.log('publicFn is called' + privateVal++);
    }

    return {
        publicVal,
        publicFn
    };
})(10);

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();

console.log(c.publicVal);

