const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => { 
    console.log("connected: " + socket.id);

    socket.emit('namct', (data) => {
        console.log(data, "123")

        socket.on('addEvent', {data: 'test123'})
    })

    socket.on('get', function (data) {
        console.log(data)
    })

    socket.on('addEvent', function (data) {
        console.log(data, 'tesdasd')
    })

 });
server.listen(3000, () => {
    console.log('Listening to port 3000')
});
