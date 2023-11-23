import express from "express";
import bcrypt from "bcrypt";
import logger from "../utils/logger.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import config from "../utils/config.js";

const userRegistrationRouter = express.Router();
const userLoginRouter = express.Router();
const userGetRouter = express.Router();

//USER REGISTRATION
userRegistrationRouter.post("/", async (req, res) => {
  try {
    const user = req.body;

    const exists = await User.find({ username: user.username }).exec();
    //console.log(exists);
    if (exists.length !== 0) {
      logger.error("Username is not available - Pick another one");
      res.json({
        error: `Cannot add user with that username: ${user.username} is not available`,
      });
    } else {
      //console.log(exists);
      const modelledUser = new User({
        username: user.username,
        email: user.email,
        password: await bcrypt.hash(user.password, 10),
        id: Math.floor(Math.random() * 10000),
      });

      modelledUser.save().then(() => {
        logger.info(`${user.username} added successfully`);
        res.json({
          message: `${user.username} was added successfully`,
        });
      });
    }
  } catch (error) {
    logger.error(error.message);
  }
});

//USER LOGIN
userLoginRouter.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    //CHECK USERNAME
    const exists = await User.find({ username: username }).exec();

    if (exists.length === 0) {
      logger.error(`User with username ${username} does not exist`);
      res.json({
        error: `User with username ${username} does not exist`,
      });
    } else {
      const isValid = await bcrypt.compare(password, exists[0].password);
      //console.log(isValid);

      if (!isValid) {
        logger.error("Invalid Password!");
        res.json({
          message: "Invalid Password",
        });
      } else {
        //console.log(config.ACCESS_TOKEN_SECRET);
        const userToken = jwt.sign(username, config.ACCESS_TOKEN_SECRET);
        logger.info(`token: ${userToken}`);
        res.json({
          message: `User ${username} authenticated`,
          token: userToken,
        });
      }
    }
  } catch (error) {
    logger.error(error.message);
  }
});

userGetRouter.get("/", async (req, res) => {
  await User.find({}, { _id: 0, __v: 0 }).then((result) => {
    res.json(result);
    // console.log("Processing request: ");
    // res.json(users);
    // console.log(users);
  });
});

export default {
  userRegistrationRouter,
  userLoginRouter,
  userGetRouter,
};
