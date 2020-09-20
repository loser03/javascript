function a() {
  setTimeout(function task1() { 
    console.log('task1 done');
    b(); // function b is called after 'task1 done' in this way.
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a();

// b();  // function b is called before 'task1 done' in this way.