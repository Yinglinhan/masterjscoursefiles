let foo = function(){
  let i = 0;
  return function(){
      console.log(i++);
  }
}
let f1 = foo();
let f2 = foo();
f1(); // 0
f2(); // 0
f1(); // 1