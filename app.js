const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http)
const port = 3000;

// Socket.io

http.listen(port, () => {
    console.log(`Servidor listening at ${port}`);
})

app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.redirect('index.html');
})

io.on('connection', (socket) => {
    socket.on('stream', (image) => {
        socket.broadcast.emit('stream', image)
    });
});