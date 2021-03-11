// import { config } from "dotenv";
// config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/procrastinapp",
  PORT: process.env.PORT || 4500,
  SECRET: 'prueba-back'
}