const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const room = {default: {
    id: 123,
    name: 'Vaimo',
    onlineUsers: 0,
    onlineUserIds: []
}};
io.on('connection', (socket) => { 
    console.log("connected: " + socket.id);

    socket.join(room.default);

    socket.on('joinRoom', (user, ack) => {
        socket.join(room.default.id);
        if (!room.default.onlineUserIds.includes(user.id)) {
            room.default.onlineUserIds.push(socket.id);    
            room.default.onlineUsers += 1;
            ack({room: room, user: user})
        }
    });

    socket.on('disconnect', () => {
        const index = room.default.onlineUserIds.indexOf(socket.id);
        if (index != -1) {
            room.default.onlineUserIds.shift(index);
        }
        console.log('Disconnected', room.default.onlineUserIds);
    })
 });
server.listen(3000, () => {
    console.log('Listening to port 3000')
});
