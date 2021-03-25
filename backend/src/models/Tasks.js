const mongoose= require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema(
  {
    idUser: { type: Schema.ObjectId, ref: "User" },
    nameTarea: {type: String, required:false},
    prioridadTarea: {type:String, required:false},
    fechaVencimiento: {type: Date, required:false},
    categoria: {type:String, required:false}
  },
  {
    timestamps: true, //fecha de creación y actualización
    versionKey: false //para quitar el __v
  }
)
module.exports = mongoose.model('Task', TaskSchema)
