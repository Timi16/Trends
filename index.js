const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const productRoutes = require('./routes/productRoutes');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
let broadcaster;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb+srv://Admin:admin12345@atlascluster.am2nbgm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', userRoutes);
app.use('/api', sellerRoutes);
app.use('/api', productRoutes);


io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('broadcaster', () => {
        broadcaster = socket.id;
        socket.broadcast.emit('broadcaster');
    });

    socket.on('watcher', () => {
        socket.to(broadcaster).emit('watcher', socket.id);
    });

    socket.on('offer', (id, message) => {
        socket.to(id).emit('offer', socket.id, message);
    });

    socket.on('answer', (id, message) => {
        socket.to(id).emit('answer', socket.id, message);
    });

    socket.on('candidate', (id, message) => {
        socket.to(id).emit('candidate', socket.id, message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        socket.to(broadcaster).emit('disconnectPeer', socket.id);
    });
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
