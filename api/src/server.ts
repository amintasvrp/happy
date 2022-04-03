import express from "express";
import "express-async-errors";
import path from "path";
import cors from "cors";

import dataSource from "./data-source";
import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

dataSource
  .initialize()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333);
