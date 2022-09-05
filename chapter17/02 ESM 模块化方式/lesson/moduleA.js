// 一般导出 可以多个
// 一定要有标识符 （名称）
// export function abc(){
//   console.log('abc')
// }


export class T {

}

export const d = {}


export function abc(){
  console.log('abc')
}


// class T {

// }

// console.log(T.name)

// const d = {
//   a:111
// }

// export {
//   abc,T,d
// }


// 默认导出一个文件只能导出一次
// 默认导出和一般导出 不冲突 可以一起使用
const a = 100
export default [1,false]