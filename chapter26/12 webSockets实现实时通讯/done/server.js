const { Server } = require("socket.io");

const io = new Server(3000, {
  cors: {
    origin: "http://localhost:5173"
  }
});

// 每一个客户端的socket链接都会触发connection事件
// 一旦客户端连接 服务器端都会创建一个新的socket实例 专门负责对应客户端的socket的通信
//  socket.id 用来标识客户端的唯一标识
io.on("connection", (ServerSocket) => {
  console.log('a user connected', ServerSocket.id);

  ServerSocket.on('server chat message', (msg) => {
    console.log('message: ' + msg);

    io.emit('chat message', { message: msg, id: ServerSocket.id });
    //ServerSocket.broadcast.emit()
  });

  ServerSocket.on('disconnect', () => {
    console.log('user disconnected');
  });
});