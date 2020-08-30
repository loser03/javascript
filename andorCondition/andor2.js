function hello(name) {
    name = name || 'Tom';
    console.log('Hello ' + name);
}

hello();


let name;

//nameがfalthyであればhello関数が実行されない　if(name)と同じ
name && hello(name);