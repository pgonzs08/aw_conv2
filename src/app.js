const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger');
const session = require('express-session');
const indexRouter = require('./routes/route_index');
const eventsRouter = require('./routes/route_event');
const usersRouter = require('./routes/route_user');

const app = express();
const port = 8080;

const startWebServer = () => {

  app.use(logger);
  app.use(session({
    secret: '4bracadabra9atalacabra', // Cadena secreta segura
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 36000000 }
  }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../public/assets')));

  app.set('views', path.join(__dirname, 'views'));
  app.set('views engine', 'ejs');

  app.use('/', indexRouter);
  app.use('/events', eventsRouter);
  app.use('/users', usersRouter);

  app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
  });
};

// Ejecutar la aplicación
console.log("Inicializando el servidor web...");
startWebServer();
