//! Importamo app desde el archivo con el mismo nombre
import app from './app.js';
//! Importamos la base de datos
import './database.js';

//! Start the server
app.listen(app.get('port'), () => {
  console.log('Server is listen on port: ', app.get('port'));
});
