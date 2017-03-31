    var socket = io();
    socket.on('connect', function(){
        console.log('now connected to server');
    });

    socket.on('newMessage', (message)=>{
      console.log('newMessage', message);
    });
    socket.emit('createMessage', {
      from: 'hyma',
      text: 'this is hyma'
    });

    socket.on('disconnect', function(){
        console.log('disconnected from server');
    });
