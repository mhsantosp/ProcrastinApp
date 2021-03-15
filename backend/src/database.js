import mongoose from 'mongoose';
import config from "./config";

// mongoose.connect(config.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: true,
//   useCreateIndex: true
// })
//   .then(db => console.log('Base de Datos Conectada!'))
//   .catch(err => console.log(err));


//CONEXIÓN A BASE DE DATOS EN MONGO ATLAS
  
const database = 'mongodb+srv://gisellmazo:1214743656@cluster0.flrhc.mongodb.net/procrastinapp-db?retryWrites=true&w=majority'

mongoose.set('useFindAndModify', false);
mongoose.connect(database,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));

module.exports = mongoose;