import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const socket = io('ws://localhost:3000');

const send = document.getElementById('send');
const message = document.getElementById('message');
const username = document.getElementById('username');

// Connection
socket.on('connect', () => {
    console.log('Connected to the server.');
});

// Receive message
socket.on('message', (text, user) => {
    console.log('receive');
    console.log('message as received: ' + text);
    console.log('user as received: ' + user);
    const item = document.createElement('li');
    const content = `
    <div class="heading">
      <span class="username">${user}</span>
      <span class="message"> ${text}</span>
    </div>
    `;
    item.innerHTML = content;
    console.log('item\'s innerHTML: ' + item.innerHTML);
    document.getElementById('list').appendChild(item);
});

// Send message
send.onclick = () => {
    console.log('send');
    console.log("Message before sending: " + message.value);
    console.log("User before sending: " + username.value);
    try {
        socket.emit('message', message.value, username.value);
    } catch (e) {
        console.log(e);
    }

    // Clear the input field
    message.value = '';
};