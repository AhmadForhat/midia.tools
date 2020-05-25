const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require("express-session");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dashRouter = require('./routes/dash');
const agendarRouter = require('./routes/agendar');
const calendarioRouter = require('./routes/calendario');
const configRouter = require('./routes/config');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
    session({
      secret: "4eee94ttt29ppps",
      resave: true,
      saveUninitialized: true,
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));


app.use('/home', indexRouter);
app.use('/', usersRouter);
app.use('/dashboard', dashRouter);
app.use('/agendar', agendarRouter);
app.use('/calendario', calendarioRouter);
app.use('/configuracoes', configRouter);


app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});