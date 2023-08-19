// const buffer = new ArrayBuffer(16);

// const buffer = Buffer.alloc(16);

// const buffer = new Uint32Array(8)
// console.log(buffer)

const  fs = require('node:fs') ;

fs.writeFile('test.txt','hello',(err)=>{

    if(err){
        console.log(err)
    }else{
        console.log('file created')
    }

})

fs.appendFile('test.txt',' code',(err)=>{

})