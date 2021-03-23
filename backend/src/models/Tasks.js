import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    // idUser: { type: Schema.ObjectId, ref: "User" },
    imgTarea: String,
    nameTarea: String,
    prioridadTarea: String,
    fechaVencimiento: Date
  },
  {
    timestamps: true, //fecha de creación y actualización
    versionKey: false //para quitar el __v
  }
)

export default model('Tasks', taskSchema);