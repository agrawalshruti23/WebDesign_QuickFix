import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";

//middlewear to parse body of request 
const app =express();
app.use(express.json());
//middlewear to encode URL
app.use(express.urlencoded());
//middlewear for cross origin resource sharing
app.use(cors());
router(app);

//database connection
mongoose.connect("mongodb://localhost:27017/UserDatabase")
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));


export default app;






