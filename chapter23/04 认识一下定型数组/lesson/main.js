// let a:number = 1
// a = 'string'
// a = true

// ['a',111,{},false]

// const buffer = new ArrayBuffer(10) // 字节数

// const a = new Int16Array(buffer)
// console.log(a)


const a = new Int8Array(10)


// 8位二进制数据 255    1 1 1 1 1 1 1 1 补码

a[0] = 100
a[2] = true
console.log(Int16Array.BYTES_PER_ELEMENT)