const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ctx. beginPath ( ) ;
ctx.rect(100, 200, 200, 100)
ctx. moveTo ( 100.5 , 20.5 ) ;
ctx. lineTo ( 200.5 , 20.5 ) ;
ctx. stroke ( ) ;
ctx. beginPath ( ) ;
ctx. moveTo ( 100.5 , 40.5 ) ;
ctx. lineTo ( 200.5 , 40.5 )
ctx. strokeStyle  =  '#f00' ;
ctx. stroke ( ) ;