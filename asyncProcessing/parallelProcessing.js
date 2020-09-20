function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// Promise.all([sleep(2), sleep(3), sleep(4)])
// .then(function(data) {
//   console.log(data); // [3, 4, 5]
// });

// Promise.race([sleep(2), sleep(3), sleep(4)])
// .then(function(data) {
//   console.log(data); // 3
// });

// Promise.allSettled([sleep(2), sleep(3), sleep(4)]) // catch method isn't conducted in allSettled
// .then(function(data) {
//   console.log(data);
// }).catch(function(e) {
//   console.error(e); // this is not conducted due to allSettled
// });

sleep(0).then(function(val) {
  return Promise.all([sleep(2), sleep(3), sleep(4)]);
}).then(function(val) {
  console.log(val); // [3, 4, 5]
  return sleep(val);
}).then(function(val) {
  return sleep(val);
})
