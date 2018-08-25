const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', cors(), (req, res) => {
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);
