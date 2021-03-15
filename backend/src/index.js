//arranca la app
// import app from './app';
// import './database';
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');

const app = express();

app.set('port', 3004)

app.use(morgan('dev'));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')))

//Rutas
app.use('/tasks', require('./routes/tasks.routes'));
app.use('/users', require('./routes/user.routes'));

// Inicio el servidor en el puerto que le indique
app.listen(app.get('port'), () => {
  console.log(`Servidor conectado en el puerto ${app.get('port')}`);
});