
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const productRoutes = require('./routes/productRoutes');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
//const webtrtc = require('wrtc');
const server = http.createServer(app);
const io = socketIo(server);
const cors = require('cors');
app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to MongoDB directly (for testing purposes)
mongoose.connect("mongodb+srv://Admin:admin12345@atlascluster.am2nbgm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', userRoutes);
app.use('/api', sellerRoutes);
app.use('/api', productRoutes);
// Socket.io connection handling
//app.post('/broadcast',async({body}) , res) => {
    //const peer = new webtrc.RTCPeerConnection({
     //   iceServers : [
         //    {
    
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle incoming messages
  socket.on('sendMessage', (data) => {
    io.to(data.receiverSocketId).emit('message', {
      senderId: data.senderId,
      message: data.message
    });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));