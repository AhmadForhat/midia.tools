const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.render('home')
})
.get('/login', function(req, res, next) {
    res.render('login')
})
.get('/cadastro', function(req, res, next) {
    res.render('cadastro')
})
.get('/agendar', function(req, res, next) {
    res.render('agendar')
})
.get('/calendario', function(req, res, next) {
    res.render('calendario')
})
.get('/configuracoes', function(req, res, next) {
    res.render('configuracoes')
})
.get('/dashboard', function(req, res, next) {
    res.render('dashboard')
})
.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});