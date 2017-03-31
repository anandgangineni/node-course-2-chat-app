const path = require('path');
const express = require('express');
const http  = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(publicPath));

io.on('connect', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'anand',
        text: 'hi this is anand',
        createdAt: 123123
    } );

    socket.on('createMessage', function(message){
      console.log('createMessage', message);
    });


    socket.on('disconnect', () => {
        console.log('user was disconnected');
    });
});

server.listen(port, ()=>{
  console.log('server is up on port: 3000');
})
