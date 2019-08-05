// Main Server with Express.js and JWT
const express = require('express');
const app = express();
const port = 3200;

const router = require('./routes/router');
app.use('/api', router);

app.listen(port, () => console.log(`app running on port: ${port}`) );