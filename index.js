
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const productRoutes = require('./routes/productRoutes');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const path = require('path');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
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

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    switch(data.type) {
      case 'broadcaster':
        broadcaster = ws;
        break;
      case 'watcher':
        if (broadcaster) {
          broadcaster.send(JSON.stringify({ type: 'watcher', id: data.id }));
        }
        break;
      case 'offer':
        if (broadcaster) {
          const targetClient = Array.from(wss.clients).find(client => client.id === data.id);
          if (targetClient) {
            targetClient.send(JSON.stringify({ type: 'offer', id: ws.id, offer: data.offer }));
          }
        }
        break;
      case 'answer':
        if (broadcaster) {
          const targetClient = Array.from(wss.clients).find(client => client.id === data.id);
          if (targetClient) {
            targetClient.send(JSON.stringify({ type: 'answer', id: ws.id, answer: data.answer }));
          }
        }
        break;
      case 'candidate':
        if (broadcaster) {
          const targetClient = Array.from(wss.clients).find(client => client.id === data.id);
          if (targetClient) {
            targetClient.send(JSON.stringify({ type: 'candidate', id: ws.id, candidate: data.candidate }));
          }
        }
        break;
    }
  });

  ws.on('close', () => {
    if (ws === broadcaster) {
      broadcaster = null;
      Array.from(wss.clients).forEach(client => {
        client.send(JSON.stringify({ type: 'broadcaster_disconnected' }));
      });
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
