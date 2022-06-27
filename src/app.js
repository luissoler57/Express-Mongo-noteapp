//! Importamos express
import express from 'express';
//! Importamos modulos dirname y join de path
import { dirname, join } from 'path';
//! Importamos dotenv
import dotenv from 'dotenv';
//!Importamos handlebars
import { engine } from 'express-handlebars';

//! Importamos el archivo de enrutamiento
import router from './routes/routes.js';
import { fileURLToPath } from 'url';
//! Importamos morgan
import morgan from 'morgan';
import exp from 'constants';

//TODO: Inicializamo dotenv
dotenv.config();
//TODO: Incializamos express
const app = express();
//TODO: Inicializamo dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

//! Setting
//* Condifuracion variablede entorno
app.set('port', process.env.PORT);
//* Configuramos el directorio de las vistas
app.set('views', join(__dirname, 'views'));
//* Configuramos handlebars como motor de plantilla (engine template)
app.engine(
  '.hbs',
  engine({
    layoutsDir: join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs',
  })
);
//*Definimos el motor de plantillas
app.set('view engine', 'hbs');

//! Middleware
//TODO: Inicializamo morgan para visualizar metodo y ruta
app.use(morgan('dev'));

//TODO:  Usamos metodo para express para convertir a objeto JSON
app.use(express.urlencoded({ extended: false }));

//! Routes
//TODO: Inicializamos el archivo de enrutamiento importado
app.use(router);

//! Static file
app.use(express.static(join(__dirname, 'public')));



//? Exportamos app para ser utilizado desde index.js
export default app;
