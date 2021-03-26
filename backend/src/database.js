//CONEXIÓN A BASE DE DATOS EN MONGO ATLAS
import mongoose from 'mongoose';
import config from "./config";

mongoose.set('useFindAndModify', false);
mongoose.connect(config.MONGODB_URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));