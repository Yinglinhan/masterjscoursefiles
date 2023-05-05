// const reg = /(123)+/g

// // abc abC

// // console.log(reg)


// // String.match


// const str = '12312381b23312344151237222'
// const result = str.match(reg)

// console.log(result)

// const reg = new RegExp(/13/, 'g')

// const reg = /123/g
// const str = '12312381b23312344151237222'
// console.log(reg.global)


// const regex = /hello/g;
// const str = 'hello world, hello javascript';

// let match;
// while ((match = regex.exec(str)) !== null) {
//   console.log(match)
//   console.log(`Found '${match[0]}' at index ${match.index}.`);
//   console.log(`Next search starts at index ${regex.lastIndex}.`);
// }

// const str = 'hellocode'
// const reg = /o/

// console.log(str.split(reg))

// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var string = "2017-06-12";
// var result = string.replace(regex, "$2/$3/$1");

// console.log(result)

// var regex = /(\d)/g;
// var string = "20170612";
// var result = string.replace(regex, "-$1-");
// console.log(result)


// const reg = /123$/g
// const str = `12312381b23312344151237123`
// const result = str.match(reg)
// console.log(result)

// const reg = /123|234/g
// const str = `12312381b23312344123423451237123`
// const result = str.match(reg)
// console.log(result)

var result = "hello".replace(/^|$/g, '#');
console.log(result);