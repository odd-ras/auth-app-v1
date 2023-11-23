import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
//import { is } from "express/lib/request";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/login", (req, res) => {
  //Authenticate User
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
