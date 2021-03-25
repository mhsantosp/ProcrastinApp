// import { Schema, model } from "mongoose";
import * as mongoose from 'mongoose';

export const taskSchema = new Schema(
  {
    imgTarea: { type: String },
    nameTarea: { type: String },
    prioridadTarea: { type: String },
    fechaVencimiento: { type: Date },
    idUser: [
      {
        type: Schema.ObjectId,
        ref: "User",
        autopopulate: true,
      },
    ],
  },
  {
    timestamps: true, //fecha de creación y actualización
    versionKey: false, //para quitar el __v
  }
);

taskSchema.plugin(require('mongoose-autopopulate'));
