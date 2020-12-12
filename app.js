const express = require('express');
const app = express();

// Making files "public"
app.use(express.static('public'));

// handlebars
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.locals.pageTitle = 'Default';

// Send responses
app.get('/', function (request, response) {
  response.render('home', { pageTitle: 'Home', activeHome: true });
});

app.get('/about', function (request, response) {
  response.render('about', { pageTitle: 'About', activeAbout: true });
});

app.get('/works', function (request, response) {
  response.render('works', { pageTitle: 'Works', activeWorks: true });
});

app.get('/gallery', function (request, response) {
  response.render('gallery', { pageTitle: 'Gallery', activeGallery: true });
});

app.listen(3000);
