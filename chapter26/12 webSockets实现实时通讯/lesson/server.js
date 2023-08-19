// import { EventEmitter } from 'node:events';

const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();




myEmitter.on('startChat', (data) => {

  console.log('an event occurred!', data);

})


setTimeout(() => {
  myEmitter.emit('startChat', 'time is up')
}, 2000)

