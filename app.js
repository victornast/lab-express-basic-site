const express = require('express');
const app = express();

// Making files "public"
app.use(express.static('public'));

// Send responses
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', function (request, response) {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', function (request, response) {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000);
