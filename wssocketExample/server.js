const WebSocket = require('ws');

// Création d'un serveur WebSocket sur le port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('💬 Un client est connecté');

  // Quand on reçoit un message du client
  ws.on('message', (message) => {
    console.log(`📩 Message reçu : ${message}`);

    // On renvoie une réponse
    ws.send(`🤖 Bot : J'ai bien reçu ton message : "${message}"`);
  });

  // Quand le client se déconnecte
  ws.on('close', () => {
    console.log('❌ Client déconnecté');
  });

  // Message automatique à la connexion
  ws.send('🤖 Bot : Bonjour ! Pose-moi ta question.');
});

console.log('✅ Serveur WebSocket lancé sur ws://localhost:8080');