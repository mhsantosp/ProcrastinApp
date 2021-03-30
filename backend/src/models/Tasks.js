const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    idUser: {
      type: Schema.ObjectId,
      ref: "User",
    },
    imgTarea: { type: String },
    nameTarea: { type: String },
    prioridadTarea: { type: String },
    fechaVencimiento: { type: Date },
  },
  {
    timestamps: true, //fecha de creación y actualización
    versionKey: false, //para quitar el __v
  }
);
module.exports = mongoose.model("Task", TaskSchema);
