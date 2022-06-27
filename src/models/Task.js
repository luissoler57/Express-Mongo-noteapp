//! Importamos modulo Schema y model de mongoose
import mongoogse from 'mongoose';

//TODO: Creamos un nuevo esquema para DB
const taskSchema = new mongoogse.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    //TODO: propiedad de mongoogse para createAt y updatedAt
    timestamps: true,
    versionKey: false,
  }
);

//TODO: Creamos el modelo de datos para el esquema taskSchema
export default mongoogse.model('Task', taskSchema);
