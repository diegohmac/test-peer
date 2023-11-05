const { PeerServer } = require('peer');

const PORT = 9002;

const peerServer = PeerServer({ 
    port: PORT, 
    key: 'demodemo',
    path: '/myapp',
    allow_discovery: true,
});

peerServer.on('connection', (client) => {
    console.log("connection ID:", client.id);
});

peerServer.on('disconnect', (client) => {
    console.log("disconnect:", client.id);
});

console.log(`Peer server running on port ${PORT}`);