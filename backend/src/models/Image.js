// module.exports = function (mongoose, DataTypes) {
//   let Image = mongoose.define("Image", {
//     // image_name: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false
//     // },

//     image: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
//   return Image;
// };

import { Schema, model } from "mongoose";

const Image = new Schema({
  fileName: { type: String },
  urlFile: { type: String },
  dateUpload: { type: Date, default: Date.now() },
});

export default model("Image", Image);
