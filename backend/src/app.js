//configurarciones palicación express
import express from 'express';
import config from "./config";
import cors from "cors";
import morgan from 'morgan';
const path = require('path');

import pkg from '../package.json';

import {createRoles} from './libs/initialSetup';

import usuariosRoutes from './routes/user.routes';
import tareasRoutes from './routes/tasks.routes';
import authRoutes from './routes/auth.routes';

const app = express(); // Este es mi servidor
createRoles();

// Settings
app.set("port", config.PORT );
app.set('pkgBack', pkg); /* asignar un nombre y valor a la variable, guardarlo en express para luego optenerlo */

// Middlewares == se ejecutan antes de llegar a las rutas
const corsOptions = {
  // origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(morgan('dev'));
// Para enviar nombre peronalizado de una imagen
app.use(express.urlencoded({extended: true}));
app.use(express.json()); //entender que datos que llegan en formato json


// Static Files == ruta que guarda las imagenes
app.use(express.static(path.join(__dirname, '/src/upload')))


app.get('/', (req, res) => {
  res.json({
    name: app.get('pkgBack').name,
    author: app.get('pkgBack').author,
    description: app.get('pkgBack').description,
    version: app.get('pkgBack').version
  })
})

// Routes
app.use('/users', usuariosRoutes);
app.use('/tasks', tareasRoutes);
app.use('/auth', authRoutes);

//app.use('/image', require('./routes/images.routes'))

export default app;