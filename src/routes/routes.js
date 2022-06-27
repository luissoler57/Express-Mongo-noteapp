//! Importamos el metodo router de express
import { Router } from 'express';
//! Importamos el controlador
import {
  routeAbout,
  routeDelete,
  routeDone,
  routeEdit,
  routeHome,
  routeSaved,
  routeUpdate,
} from '../controllers/controller.js';
import Task from '../models/Task.js';

//TODO: Incializamos el modulo router
const router = Router();

//TODO: Creamos la ruta para el HOME
router.get('/', routeHome);
//? Creamos ruta para metodo post agregar tares
router.post('/tasks/add', routeSaved);

//! Enrutamiento para CREATE READ DELETE UPDATE TOGGLEDONE
//TODO: Creamos la ruta para (UPDATE GET)
router.get('/tasks/:id/edit/', routeEdit);

//? Enrutamiento para actualizar (UPDATE POST)
router.post('/tasks/:id/edit', routeUpdate);

//TODO: Enrutamiento para (DELETE) una ruta
router.get('/tasks/:id/delete', routeDelete);

//TODO: Enrutamiento (ToggleDone)
router.get('/tasks/:id/toggleDone', routeDone);

//! Enrutamiento para CREATE READ DELETE UPDATE TOGGLEDONE (FIN)

//TODO: Creamos la ruta para ABOUT
router.get('/about', routeAbout);

export default router;
