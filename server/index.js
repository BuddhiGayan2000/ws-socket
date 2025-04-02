
// this is a normal ws server lack of the capability to broadcasting. This just create a full-duplex connection between client and server.

// const websocket = require('ws');
// const server = new websocket.Server({ port: '8080'});

// server.on('connection' , socket => {
//     socket.on('message', message => {
//         console.log('message is:', message);
//         socket.send(`Roger that! ${message}`);
//     });
// });

const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(message);
        // reemitting the message so it will be broadcasted to everybody listening
        io.emit('message', `${socket.id.substr(0,2)} said ${message}`);
    });
    
})

http.listen(8080, () => {
    console.log('listening on *:8080');
})

