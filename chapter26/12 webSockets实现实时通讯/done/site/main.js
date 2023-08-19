import { io } from 'socket.io-client';

// 建立链接
const clientSocket = io('http://localhost:3000');

clientSocket.on('connect', () => {
  console.log('someone come', clientSocket.id);
})

clientSocket.on('disconnect', () => {
  console.log('someone left', clientSocket.id);
})


clientSocket.on('chat message', (msg) => {
  console.log(msg, 'from server');
})

const button = document.getElementById('button');




button.addEventListener('click', () => {
  clientSocket.emit('server chat message', 'hello from client');
})
