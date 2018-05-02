// io.js

var io = require('socket.io')();

// Listen for new connections from clients (socket)
io.on('connection', function (socket) {
    socket.on('add-circle', function (data) {
        io.emit('add-circle', data);
    });

    socket.on('remove-circle', function (data) {
        io.emit('remove-circle', data);
    });
    socket.on('disconnect', function () {
        delete players[socket.id];
        io.emit('update-player-list', Object.values(players));
    });
    socket.on('register-player', function (data) {
        players[socket.id] = initials
        io.emit('update-player-list', Object.values(players));
    });


});

// io represents socket.io on the server - let's export it
module.exports = io;