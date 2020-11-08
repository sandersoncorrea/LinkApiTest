import "dotenv/config";

import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose
  .connect(process.env.DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("Connection error: ", err.stack);
  });

app.use(routes);

app.listen(3333);
