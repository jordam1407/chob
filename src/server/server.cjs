// src/server.js
const app = require('./app.cjs');

const SERVER_PORT = 3001;
app.listen(SERVER_PORT, () => console.log('server running on port 3001'));
