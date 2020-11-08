import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose
  .connect(
    "mongodb+srv://admin:linkapi@cluster0.fqc1g.mongodb.net/deals?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => {
    console.error("Erro na conexão: ", err.stack);
  });

app.use(routes);

app.listen(3333);
