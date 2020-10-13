const express = require('express');
const api = require('./api');
const path = require('path');

const app = express();
const PORT = 4000;

app
  .use('/api', api(express))
  .get('/', (req, res) => {
    res
      .status(200)
      .set({
        'Content-Type': 'text/html; charset=utf-8'
      })
      .sendFile(path.join(__dirname, 'public', 'index.html'));
  })
  .get('/static', (req, res) => {
    res
      .status(200)
      .set({
        'Content-Type': 'application/pdf'
      })
      .sendFile(path.join(__dirname, 'public', 'static.pdf'));
  })
  .get('/static2', (req, res) => {
    res
      .status(200)
      .set({
        'Content-Type': 'image/svg+xml'
      })
      .sendFile(path.join(__dirname, 'public', 'man.svg'));
  })
  .use((req, res) => {
    res
      .status(404)
      .set({
        'Content-Type': 'text/html'
      })
      .send('<h1 style="color: red">Not Found</h1>');
  })
  .listen(process.env.PORT || PORT);
