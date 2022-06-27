//! Importamos el metodo connect de mongoose
import mongoose from 'mongoose';
//! Importamos dotenv para las variables de entorno
import dotenv from 'dotenv';
dotenv.config();

//TODO: Configuracion de MongoDB
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@nodejs.b2yzi.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`;

//TODO: Se configura conexion a mongoDB Atlas
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connect to mongodb', process.env.NAME_DB))
  .catch((e) => console.log('connection error', e));
