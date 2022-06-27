//! Importamos el modelo de datos
import Task from '../models/Task.js';

//TODO: Creamos ruta HOME para exportar
export const routeHome = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render('home', {
    tasks: tasks,
  });
};

//! Enrutamiento REATE READ DELETE UPDATE TOGGLEDONE
//TODO: Ruta para guarda notas (CREATE)
export const routeSaved = async (req, res) => {
  try {
    const task = Task(req.body);

    const taskSaved = await task.save();

    res.redirect('/');
  } catch (E11000) {
    res.send('El registro ya se encuentra');
  }
};
//TODO: Creamos ruta EDIT para exportar (UPDATE)
export const routeEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render('edit', {
      task,
    });
  } catch (error) {
    console.log(error.message);
  }
};
//TODO: Controlador de ruta de (UPDATE)
export const routeUpdate = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect('/');
};

//TODO: Controladora de ruta (DELETE)
export const routeDelete = async (req, res) => {
  //? Extaemos el id desde req.params
  const { id } = req.params;
  //? Utilizamos el metodo buscar y eliminar el id seleccionado
  await Task.findByIdAndDelete(id);
  //? Al finalizar redireccionamos a la pagina principal
  res.redirect('/');
};

//TODO: Controlador de ruta (TOGGLE_DONE)
export const routeDone = async (req, res) => {
  //? Extaemos el id desde req.params
  const { id } = req.params;
  //? Buscamos por el id el en modelo Task
  const task = await Task.findById(id);
  //? Utilizamos el (!) inverso de la propiedad done para cambiar el estado
  task.done = !task.done;
  //? Guardamos el estado de la tarea
  await task.save();
  //? Al finalizar redireccionamos a la pagina principal
  res.redirect('/');
};
//! Enrutamiento REATE READ DELETE UPDATE TOGGLEDONE (FIN)

//TODO: Creamos ruta ABOUT para exportar
export const routeAbout = (req, res, next) => {
  res.render('about');
};
