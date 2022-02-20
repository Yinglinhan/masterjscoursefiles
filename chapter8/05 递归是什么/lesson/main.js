// recursion 递回

// function test(){
//   console.log(1)
//   test()
// }

// test()
// 栈溢出

// 要让递归有一个出口
// 这个代码会在某个条件下 不再调用自身

// 阶乘 5!  5 * 4 * 3 * 2 * 1

function fac (num) {
	if(num <= 1){
        return 1;
    }else{
        return num * fac(num - 1);
    }
}

console.log(fac(6))

// 函数自己调用自己
// 要有出口
