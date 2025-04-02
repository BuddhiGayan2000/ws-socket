const websocket = require('ws');
const server = new websocket.Server({ port: '8080'});

server.on('connection' , socket => {
    socket.on('message', message => {
        console.log('message is:', message);
        socket.send(`Roger that! ${message}`);
    });
});