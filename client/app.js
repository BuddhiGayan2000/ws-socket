//basic implementation for ws server, but I'm upgrading it using socket.io

// const socket = new WebSocket('ws://localhost:8080');

// //listen for messages
// socket.onmessage = ({ data}) => {
//     console.log('Message from server', data);
// }

// document.querySelector('button').onclick = () => {
//     socket.send('Hello');
// }

const socket = io('ws://localhost:8080');

socket.on('message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
}