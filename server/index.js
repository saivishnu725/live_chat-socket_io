const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('message', (message, username) => {
        console.log(`user in server: ${username}`);
        console.log(`message in server: ${message}`);
        io.emit('message', message, username);
    });
});


http.listen(3000, () => {
    console.log('listening on *:3000');
});
