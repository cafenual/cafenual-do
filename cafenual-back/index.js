import express from "express";
import mongoose from "mongoose";
import config from "./config/key";

import usersRouter from "./routers/usersRouter";
import menusRouter from "./routers/menusRouter";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected.... "))
  .catch((err) => console.log(err));

// Router
app.use("/api/users", usersRouter);
app.use("/api/menus", menusRouter);

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
