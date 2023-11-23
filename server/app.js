import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./utils/config.js";
import logger from "./utils/logger.js";
import users from "./controllers/users.js";
import middleware from "./utils/middleware.js";
//import User from "./models/user.js";

const app = express();

mongoose.set("strictQuery", false);
logger.info("Connecting to: ", config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.info("error connecting to MongoDB: ", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/register", users.userRegistrationRouter);
app.use("/api/login", users.userLoginRouter);
app.use("/api/users", users.userGetRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
