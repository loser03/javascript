const a = 0;
const b = 1;
const c = 3;
const d = 0;

//falthyな値が見つかった時点でfalthyの値を返す、なければ最後の値を返す
console.log(a && b && c); 

//truthyな値が見つかった時点でtruthyな値を返す、なければfalthyを返す
console.log(a || b || c);

//一つの条件式にandとorが混在とするとややこしいので()でグループ化
console.log((a || b) && (c || d));
